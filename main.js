var radiosSlideSwitch = document.querySelectorAll('input[type=radio][name="slide_switch"]');
    radiosSlideSwitch[0].nextElementSibling.childNodes[1].style.border = "1px solid #d0d0d0"
    var imageDetails = document.querySelectorAll('.img-details');
    var index, index2;
    function changeSwitchHandler(event) {
      for (i = 0; i < imageDetails.length; ++i) {
        if (this.value === imageDetails[i].childNodes[0].nextSibling.childNodes[0].getAttribute('src')) {
          index = i;
          imageDetails[i].style.display = "block";
          imageDetails[i].style.opacity = "1";
          radiosSlideSwitch[i].nextElementSibling.childNodes[1].style.border = "1px solid #d0d0d0"
        }
      }
      for (i = 0; i < imageDetails.length; ++i) {
        if (i === index)
          continue;
        else {
          imageDetails[i].style.display = "none";
          imageDetails[i].style.opacity = "0";
          radiosSlideSwitch[i].nextElementSibling.childNodes[1].style.border = "none"
        }
      }
    }

    // 
    var radiosTab = document.querySelectorAll('input[type=radio][name="tabs"]');
    var tabContent = document.querySelectorAll('.tabcontent');
    for (i = 1; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    function changeTabHandler(event) {
      for (i = 0; i < tabContent.length; i++) {
        if (this.value === tabContent[i].id) {
          index2 = i;
          tabContent[i].style.display = "block";
        }
      }
      for (i = 0; i < tabContent.length; i++) {
        if (i === index2)
          continue;
        else {
          tabContent[i].style.display = "none";
        }
      }
    }



    Array.prototype.forEach.call(radiosSlideSwitch, function (radio) {
      radio.addEventListener('change', changeSwitchHandler);
    });
    Array.prototype.forEach.call(radiosTab, function (radio) {
      radio.addEventListener('change', changeTabHandler);
    });