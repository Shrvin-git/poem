// گرفتن المان‌های لازم از DOM
var nateBtn = document.getElementById('nate-btn');
var themeBtn = document.getElementById('theme-btn');
var shareBtn = document.getElementById('share-btn');
var loadingDiv = document.getElementById('loading');
var resultDiv = document.getElementById('result');
var poemElement = document.getElementById('poem');

// لیست فال‌های حافظ
var poems = [
    " تا کی کار امروز را به فردا موکول کردن و غرق بودن در شیرینی خواب غفلت؟ آیا واقعا از فردای خود مطمئن هستی؟ زندگی امروز را چنان باید که گویا فردایی در کار نیست. هرچه می خواهی انجام می دهی و از خود یادگارهای نیک برجای بگذاری. همین امروز شاید که فردایی نباشد. ",

    " نیتی در دل داری و برای رسیدن به آن خود را منزوی و تنها کرده ای. هرچه که داشته ای در راه حصول این نیت خالصانه بکار گرفته ای اما تاکنون نتیجه ای نگرفته ای و این باعث شده دیگران تلاش تو را بیهوده تصور کنند. مهم این است که تو تمام تلاش خود را می کنی و همان طور که می دانی جوینده یابنده است. ",

    " انسانی قدرشناس هستی و اگر از کسی محبت ببینی تا پایان عمر فراموش نخواهی کرد. در کار خود پابرجا و مصمم هستی و همین صفت نیکو تو را در کارهایت یاری نموده است. اگر از سوی او بی میلی و بی اعتنایی می بینی واقعی نیست بلکه شیوه دلبری و دلداری است. ",


    " خداوند بزرگ به تو آنقدر که لازم است نعمت های خود را بخشیده است و تو نباید طمع و زیاده خواهی کنی. برای نیتی که در سر داری به خوبی چاره اندیشی کن و برای انجام آن عجله به خرج مده. زیرا اجرای این نیت نیاز به آمادگی های بیشتری دارد که تو اکنون فاقد آن هستی. ",


    " مدتهاست دل سپرده ای و هرگز قصد بازگشت از سفر عشق را نداری، در عین حال بی تاب و بی قرار هستی. اگر می خواهی به این راه ادامه بدهی باید بر خود مسلط باشی و بیش از این خود را عذاب ندهی و ناله و زاری بیهوده نکنی. تو که در انتخاب این راه به حرف هیچ کس گوش نکرده و اکنون به خود کرده دچار شده ای باید صبور باشی و به خدا توکل کنی تا کارها رو به راه شوند. ",

    " مدتی است دچار مشکلات مالی شده ای و به علت ضعف مالی در عشق خود دچار تردید گشته ای، اما بدان که به زودی مشکلت حل خواهد شد. غصه گذشته را مخور و به آینده بیاندیش و نگران هیچ چیز نباش که خداوند کریم و رحیم است. ",
];

nateBtn.addEventListener('click', function () {
    nateBtn.disabled = true; // غیرفعال کردن دکمه
    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');

    setTimeout(() => {
        let randomPoemsIndex = Math.floor(Math.random() * poems.length)
        loadingDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');
        poemElement.innerHTML = poems[randomPoemsIndex]
        nateBtn.disabled = false; // غیرفعال کردن دکمه

    }, 5000);
})

// عملیات تغییر تم
themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});

// عملیات اشتراک‌گذاری فال
shareBtn.addEventListener('click', function () {
    var poemText = poemElement.textContent;
    if (poemText) {
        navigator.clipboard.writeText("فال من: " + poemText)
            .then(function () {
                alert('فال شما کپی شد!');
            })
            .catch(function () {
                alert('کپی کردن فال با مشکل مواجه شد.');
            });
    } else {
        alert('لطفاً ابتدا یک فال بگیرید!');
    }
});