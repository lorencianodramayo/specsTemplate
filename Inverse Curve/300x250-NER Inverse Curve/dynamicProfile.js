var defaultValues = {
    numberOfFrames: "2 Frames",
    productImg: "image.jpg",
    frame1Headline: "Your new glasses are just a click away",
    frame1Subheadline: "n/a",
    frame1Subheadline2: "n/a",
    frame2Headline: "n/a",
    frame2Subheadline: "n/a",
    frame2Subheadline2: "n/a",
    currency: "£",
    bgMask1: "n/a",
    ctaText: "n/a",
    ctaText2: "n/a",
    cssAttrib: "[color:#fff;font-size:22px;font-family:SpecsaversWeb-Medium;margin-top:-4px;line-height: 26px;],[],[]",
    cssAttrib2: "[font-size:22px;color:#fff;font-family:SpecsaversWeb-Medium;line-height: 26px;],[font-family:SpecsaversWeb-Regular;font-size:17px;color:#fff;margin-top: 12px;],[]",
    logo: "images/Specsavers.png",
    baseImage: "images/Specsavers.png",
    baseImage2: "images/Specsavers.png",
    landingPage: "https://www.specsavers.co.uk/",
    startDate: "&nbsp;",
    endDate: "&nbsp;",
    readableLabel: "&nbsp;"
}

var frame1Headline_text = document.getElementById("frame1Headline_text");
var image = document.getElementById("image");

function initDynamic() {
    (!Enabler.isServingInLiveEnvironment()) ? localPreview(): studioPreview();
}

const localPreview = () => {
    defaultValues.numberOfFrames;
    defaultValues.productImg;
    defaultValues.frame1Headline;
    defaultValues.frame1Subheadline;
    defaultValues.frame1Subheadline2;
    defaultValues.frame2Headline;
    defaultValues.frame2Subheadline;
    defaultValues.frame2Subheadline2;
    defaultValues.currency;
    defaultValues.bgMask1;
    defaultValues.ctaText;
    defaultValues.ctaText2;
    defaultValues.cssAttrib;
    defaultValues.cssAttrib2;
    defaultValues.logo;
    defaultValues.baseImage;
    defaultValues.baseImage2;
    defaultValues.landingPage;
    defaultValues.startDate;
    defaultValues.endDate;
    defaultValues.readableLabel;
}


const studioPreview = () => {
    invocationCode();
}

//custom easeing
CustomEase.create("inAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("outAnimation", "1, 0.005, 1, 1");
//image easing
CustomEase.create("imageEaseIn", "0.0, 0.0, 0.580, 1.0");
CustomEase.create("imageEaseOut", "0.420, 0.0, 1.0, 1.0");

function setAnimation() {
    gsap.set(frame1Headline_text, {
        opacity: 0,
        x: 100
    });
    gsap.set(image, {
        opacity: 0
    })
}



function initAnimation() {
    var animate = {
        opacity: 1,
        x: 0,
        ease: "inAnimation"
    }
    var tl = gsap.timeline({
        paused: true
    });
    tl.play().to(frame1Headline_text, 1, animate).to(image, 1, {
        opacity: 1,
        ease: "imageEaseIn",
        onComplete: function () {
            tl.pause();
        }
    }, "-=1")
}