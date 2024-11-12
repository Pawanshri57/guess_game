document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("upload");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const brightnessSlider = document.getElementById("brightness");
    const contrastSlider = document.getElementById("contrast");
    const saturationSlider = document.getElementById("saturation");
    const rotateSlider = document.getElementById("Rotate");
    const scaleSlider = document.getElementById("Scale");
    const cropBtn = document.getElementById("crop-btn");
    const applyCropBtn = document.getElementById("apply-crop-btn");
    const downloadBtn = document.getElementById("download-btn");

    // declaration of variable

    let img = new Image();
    let isCropping = false;
    let isFlippedHorizontal = false;
    let isFlippedVertical = false;
    let cropStartX, cropStartY, cropWidth, cropHeight;

    function drawImage() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        ctx.translate(canvas.width / 2, canvas.height / 2);

        if(isFlippedHorizontal) ctx.scale(-1,1);
        if(isFlippedVertical) ctx.scale(-1,1);


        ctx.drawImage(
            img,
            -canvas.width / 2,
            -canvas.height / 2,
            canvas.width,
            canvas.height
        );
        ctx.restore();
    }




    uploadInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (Event) => {
            console.log(Event.target.result);
            img.src = Event.target.result;
        }
        reader.readAsDataURL(file);
        img.onload = drawImage;
    });

    brightnessSlider.addEventListener("input", applyEdits);
    contrastSlider.addEventListener("input", applyEdits);

    saturationSlider.addEventListener("input", applyEdits);

    rotateSlider.addEventListener("input", applyEdits);

    scaleSlider.addEventListener("input", applyEdits);

    function applyEdits() {
        const brightness = brightnessSlider.value;
        const contrast = brightnessSlider.value;
        const saturation = brightnessSlider.value;
        const Rotate = brightnessSlider.value;
        const Scale = scaleSlider.value / 100;

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;



    }








});