// //querySelectorAll('.tab-button')[0]
// var 버튼 = $('.tab-button');
// var 설명 = $('.tab-content');

// 버튼.eq(0).on('click',function(){
//     버튼.removeClass('orange');
//     설명.removeClass('show');
//     버튼.eq(0).addClass('orange');
//     설명.eq(0).addClass('show');
// })

// 버튼.eq(1).on('click',function(){
//     버튼.removeClass('orange');
//     설명.removeClass('show');
//     버튼.eq(1).addClass('orange');
//     설명.eq(1).addClass('show');
// })

// 버튼.eq(2).on('click',function(){
//     버튼.removeClass('orange');
//     설명.removeClass('show');
//     버튼.eq(2).addClass('orange');
//     설명.eq(2).addClass('show');
// })

// 버튼.eq(3).on('click',function(){
//     버튼.removeClass('orange');
//     설명.removeClass('show');
//     버튼.eq(3).addClass('orange');
//     설명.eq(3).addClass('show');
// })

// 버튼.eq(4).on('click',function(){
//     버튼.removeClass('orange');
//     설명.removeClass('show');
//     버튼.eq(4).addClass('orange');
//     설명.eq(4).addClass('show');
// })

// 전부 다 포문으로 돌리면
const tabButtons = document.querySelectorAll('.tab-button');

// Loop through each tab button
for (let i = 0; i < tabButtons.length; i++) {
  // Add click event listener to each tab button
  tabButtons[i].addEventListener('click', function() {
    // Remove orange class from all tab buttons
    $('.tab-button').removeClass('orange');
    // Remove show class from all tab contents
    $('.tab-content').removeClass('show');
    // Add orange class to clicked tab button
    $(this).addClass('orange');
    // Add show class to corresponding tab content
    $('.tab-content').eq(i).addClass('show');
  });
}