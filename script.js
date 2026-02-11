// Popup Open
const popup = document.getElementById("popupForm");
const btn = document.getElementById("ctaBtn");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
    popup.style.display = "block";

    // Button Click Tracking
    if(window.$zoho && $zoho.salesiq){
        $zoho.salesiq.track("CTA_Button_Clicked");
    }
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Form Submit
document.getElementById("leadForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert("Thank you " + name + "! We will contact you soon.");

    // Send Data to Zoho SalesIQ
    if(window.$zoho && $zoho.salesiq){
        $zoho.salesiq.visitor.name(name);
        $zoho.salesiq.visitor.email(email);
        $zoho.salesiq.track("Lead_Form_Submitted");
    }

    popup.style.display = "none";
});

// Scroll Percentage Tracking
window.addEventListener("scroll", function(){
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = Math.round((scrollTop / docHeight) * 100);

    console.log("Scroll: " + scrollPercent + "%");

    if(window.$zoho && $zoho.salesiq){
        $zoho.salesiq.visitor.update({
            Scroll_Percentage: scrollPercent + "%"
        });
    }
});
