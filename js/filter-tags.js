(function(){var $imgs=$('#gallery img');var $buttons=$('#buttons');var tagged={};$imgs.each(function(){var img=this;var tags=$(this).data('tags');if(tags){tags.split(',').forEach(function(tagName){if(tagged[tagName]==null){tagged[tagName]=[];}
tagged[tagName].push(img);});}});$('<button/>',{text:'Show All',class:'active',click:function(){$(this).addClass('active').siblings().removeClass('active');$imgs.show();}}).appendTo($buttons);$.each(tagged,function(tagName){$('<button/>',{text:tagName+' ('+tagged[tagName].length+')',click:function(){$(this).addClass('active').siblings().removeClass('active');$imgs.hide().filter(tagged[tagName]).show();}}).appendTo($buttons);});}());
function filterAnimals(e) {
    const animals = document.querySelectorAll(".list div"); // select all animal divs
    let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
    animals.forEach(animal => {
      animal.classList.contains(filter) // does the animal have the filter in its class list?
      ? animal.classList.remove('hidden') // if yes, make sure .hidden is not applied
      : animal.classList.add('hidden'); // if no, apply .hidden
    });
  };