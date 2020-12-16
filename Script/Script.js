window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('#my-form');
  const names = document.querySelectorAll('.must');
  const alerts = document.querySelectorAll('.alert');
  const fields = document.querySelectorAll('.focused');
  const inputs = document.querySelectorAll('.name-input');

  let personData = {};
  let passedNameChecks = false;

  function checkName() {
    const firstName = names[0].value;
    const lastName = names[1].value;
    if (!firstName || !lastName) {
      fields[0].classList.add('alert-section');
      alerts[0].classList.add('shown-alert');
      passedNameChecks = false;
    } else {
      passedNameChecks = true;
      personData = {
        ...personData,
        firstName,
        lastName,
      };
    }
  }

  let addressData = {};
  let passedAddressData = false;

  function checkAddress() {
    const address = names[2].value;
    const address2 = names[3].value;
    const city = names[4].value;
    const state = names[5].value;
    const postalCode = names[6].value;
    if (!address || !address2 || !city || !state || !postalCode) {
      fields[1].classList.add('alert-section');
      alerts[1].classList.add('shown-alert');
      passedAddressData = false;
    } else {
      passedAddressData = true;
      addressData = {
        ...addressData,
        address,
        address2,
        city,
        state,
        postalCode,
      };
    }
  }

  let phoneNumber = {};
  let passedPhoneNumber = false;

  function checkPhone() {
    const phone = names[7].value;
    if (!phone) {
      fields[2].classList.add('alert-section');
      alerts[2].classList.add('shown-alert');
      passedPhoneNumber = false;
    } else {
      passedPhoneNumber = true;
      phoneNumber = {
        ...phoneNumber,
        phone,
      };
    }
  }

  let sources = {};
  let passedSources = false;

  function checkSource() {
    const source = names[8].value;
    if (!source) {
      fields[4].classList.add('alert-section');
      alerts[3].classList.add('shown-alert');
      passedSources = false;
    } else {
      passedSources = true;
      sources = {
        ...sources,
        source,
      };
    }
  }
  function validateEmail(email) {
    if (inputs[5].value != '' || inputs[5].value) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }

  console.log(validateEmail('anystring@anystring.anystring'));

  function hasErrors() {
    if (!passedNameChecks || !passedAddressData || !passedPhoneNumber
      || !passedSources) {
      return true;
    }
  }

  const successful = document.querySelector('.successful');
  const overlay = document.querySelector('.overlay');

  function success() {
    successful.classList.add('success');
    overlay.classList.add('success');
  }

  function closePopup() {
    successful.classList.remove('success');
    overlay.classList.remove('success');
  }

  overlay.addEventListener('click', closePopup());

  function onSubmit(event) {
    event.preventDefault();
    checkName();
    checkAddress();
    checkPhone();
    checkSource();
    validateEmail();
    if (hasErrors()) {
      return;
    }
    success();
    console.log('Personal Data', personData);
    console.log('Address Data', addressData);
    console.log('Phone Number', phoneNumber);
    console.log('Sources', sources);
  }

  form.addEventListener('submit', onSubmit);
});
