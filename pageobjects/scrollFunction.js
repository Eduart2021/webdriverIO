function myScrollIntoView (selector){
    browser.execute(function(elemSelector){
        document.querySelector(elemSelector).scrollIntoView()
    }, selector)
}

module.exports =myScrollIntoView