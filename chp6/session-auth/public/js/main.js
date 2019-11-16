function _(id) {
    return document.getElementById(id);
}
function validate(e) {
    e.preventDefault();
    console.log(_('username').value, _('password').value)
    if(_('username').value && _('password').value) {
        _('login-form').submit();
    } else {
        alert('Please enter username and password');
    }
   
}