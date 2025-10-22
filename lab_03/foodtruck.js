document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registration-form');
    var fields = ['firstName', 'lastName', 'email', 'phone', 'age', 'foodPreference'];
    
    // Add validation to all fields
    for (var i = 0; i < fields.length; i++) {
        var field = document.getElementById(fields[i]);
        field.addEventListener('blur', function() { validate(this); });
        field.addEventListener('input', function() { clearError(this); });
    }
    
    // Format phone and name inputs
    document.getElementById('phone').addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
    
    document.getElementById('firstName').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    
    document.getElementById('lastName').addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var valid = true;
        
        for (var i = 0; i < fields.length; i++) {
            if (!validate(document.getElementById(fields[i]))) {
                valid = false;
            }
        }
        
        if (valid) {
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        }
    });
    
    // Validate function
    function validate(field) {
        var value = field.value.trim();
        var name = field.name;
        
        if (!value) {
            showError(field, getLabel(name) + ' is required');
            return false;
        }
        
        if ((name === 'firstName' || name === 'lastName') && value.length < 2) {
            showError(field, 'Name must be at least 2 characters');
            return false;
        }
        
        if (name === 'email' && (!value.includes('@') || !value.includes('.'))) {
            showError(field, 'Please enter a valid email');
            return false;
        }
        
        if (name === 'phone' && value.length !== 10) {
            showError(field, 'Phone must be 10 digits');
            return false;
        }
        
        if (name === 'age') {
            var age = parseInt(value);
            if (age < 18 || age > 100) {
                showError(field, 'Age must be 18-100');
                return false;
            }
        }
        
        return true;
    }
    
    // Function to show and clear errors 
    function showError(field, message) {
        var group = field.closest('.form-group');
        group.classList.add('error');
        group.querySelector('.error-message').textContent = message;
    }
    
    function clearError(field) {
        var group = field.closest('.form-group');
        group.classList.remove('error');
        group.querySelector('.error-message').textContent = '';
    }
    
    function getLabel(name) {
        var labels = {
            firstName: 'First name', lastName: 'Last name', email: 'Email',
            phone: 'Phone', age: 'Age', foodPreference: 'Food preference'
        };
        return labels[name];
    }
});

// Function to reset the form
function resetForm() {
    document.getElementById('registration-form').reset();
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('success-message').style.display = 'none';
    
    var errors = document.querySelectorAll('.form-group.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].classList.remove('error');
        errors[i].querySelector('.error-message').textContent = '';
    }
}
