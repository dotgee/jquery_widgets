# Usefull jQuery Widgets

## description TODO

## Widgets List

### Show More

### Usage

html:

    <ul class ='showmore_container'>
      <li class = 'showable' >...</li>
      <li class = 'showable' >...</li>
      <li class = 'showable' >...</li>
      <li class = 'showable' >...</li>
      <li class = 'showable' >...</li>
    </ul>

javascript:
  $('.showmore_container').showmore()

  or
  var options = {
    nbToShow : 5,
    step: 5,
    moreText: "[+] Voir plus",
    minusText: "[-] Voir moins",
    cssShowable : ".other_selector"
  }
  $('.showmore_container').showmore(options)


options:
  nbToShow: 5





