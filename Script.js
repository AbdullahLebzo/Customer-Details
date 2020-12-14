const required = document.querySelectorAll('.must');

for (let i = 0; i < required.length; i += 1) {
  required[i].setAttribute('required', '');
}

