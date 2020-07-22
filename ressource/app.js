const controller = new ScrollMagic.Controller();

$('.bloc_image_info').each(function(){

    let overlay = $(this).find('.overlay');
    let projetInfo = $(this).find('.projet-info');
    let smallTitle = $(this).find('.small-title');
    let projetLink = $(this).find('.projet-link');
    let iconeTitle = $(this).find('.icone-title')

    let TL = new TimelineMax();

    TL
        .fromTo(overlay, 2, {skewX: 30, scale: 1.5},{skewX: 0, xPercent: 100, scale: 0.5 ,transformOrigin: "50% 0% 0px", ease:Power4.easeOut()})
        .from(projetInfo, 1, {scaleY: 0, transformOrigin: "bottom left"}, "-=1.5")
        .from(smallTitle, 0.3, {autoAlpha: 0, y:30, ease: Power4.easeOut}, "-=0.8")
        .from(projetLink, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")
        .from(iconeTitle, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")

    let scene = new  ScrollMagic.Scene({
        triggerElement: this
    })
        /*.addIndicators()*/
        .setTween(TL)
        .addTo(controller)
})
