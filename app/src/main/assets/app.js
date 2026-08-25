/**
 * AMAWAL ULTIMATE - The Cinematic PhD Research Suite
 * Version: 11.0.0 Global Sovereign Edition
 * Developed for High-End Academic Presentation
 */

const ultimateRepository = [
    {
        id: "ULT-101",
        lemma: "Iswa / ⵉⵙⵡⴰ",
        ipa: "[is.'wa]",
        root: "√SW",
        morph: "Perfective Aspect / فعل تام",
        tribe: "إقليم بولمان (مشترك جغرافياً)",
        confidence: "Verified Data [1.00]",
        meaning: "الاستيعاب الفيزيولوجي للمواد السائلة والعضوية.",
        charge_val: 85,
        tag: "Act of Dominance / الاستحواذ الرمزي",
        logic: "يتجاوز الفعل دلالته الحيوية (الارتواء) ليصبح 'فعل كلام إنجازي' يعبر عن التمكن والمصادرة. في النسق الثقافي المحلي، شرب 'تاسيلا' أو 'الكأس' هو فعل تملك مكاني واجتماعي عميق يمنح المتحدث سلطة رمزية استثنائية.",
        manuscript: "turud unna wr irri lḥma iddud iswit",
        analysis: "الارتقاء المعرفي: تحول من الاستهلاك العضوي إلى الهيمنة التداولية المطلقة عبر آلية الاستعارة التملكية."
    },
    {
        id: "ULT-102",
        lemma: "Iraḥ / ⵉⵔⴰⵃ",
        ipa: "[i.'rah]",
        root: "√RḤ",
        morph: "Telic Motion / حركة غائية",
        tribe: "أيت وراين / أيت يوسي",
        confidence: "Validated Archive [0.97]",
        meaning: "الانتقال الجغرافي القطعي والنهائي من الحيز المكاني.",
        charge_val: 15,
        tag: "Act of Severance / فعل القطيعة",
        logic: "يرتبط 'Iraḥ' بنيوياً بحالات التأزم النفسي والاجتماعي. هو رحيل مشوب بالانفعال السلبي (غضب/هجر قسري)، مما يفرقه جوهرياً عن أفعال الحركة المحايدة. يجسد حالة 'الهباء المكاني' الناتج عن تدهور الروابط بين الأفراد والمجال.",
        manuscript: "hiya tssuffy i, irəḥ iqqim iggur",
        analysis: "الاستقصاء التحليلي: الفعل يجسد 'الأثر التداولي الناتج' عن حالة الصراع الاجتماعي والرحيل القسري المشحون انفعالياً."
    },
    {
        id: "ULT-103",
        lemma: "Ifta / ⵉⴼⵜⴰ",
        ipa: "[if.'ta]",
        root: "√FT",
        morph: "Neutral Motion / حركة بسيطة",
        tribe: "أيت يوسي",
        confidence: "Standardized [1.00]",
        meaning: "المشي أو التوجه الاعتيادي نحو وجهة جغرافية محددة.",
        charge_val: 50,
        tag: "Reference Act / الفعل المرجعي المحايد",
        logic: "يمثل الوحدة اللسانية 'الصفرية' في ميزان الشحنات. هو فعل واصف (Descriptive) يستخدم في بناء المشاهد الوصفية دون مقصدية انفعالية، مما يجعله فعلاً إخبارياً محضاً يستخدم لتأطير حركة الشخوص في السرد المادي المجرد.",
        manuscript: "Ifta s udrar",
        analysis: "الملاحظة العلمية: غياب المقصدية الانفعالية يجعل منه وحدة لسانية واصفة للمشهد المادي والمكاني الصرف."
    },
    {
        id: "ULT-104",
        lemma: "Yuzn / ⵢⵓⵣⵏ",
        ipa: "[ju.'zen]",
        root: "√ZN",
        morph: "Illocutionary / فعل تواصل قولي",
        tribe: "مرموشة",
        confidence: "Verified Protocol [0.98]",
        meaning: "البعث أو الإرسال الرسمي لرسول أو خبر أو عهد قبلي.",
        charge_val: 95,
        tag: "Reverence Act / فعل التوقير الرسمي",
        logic: "يرتبط بسياقات العهود والرسائل القبلية الكبرى. يمنح الفعل صبغة 'شرعية' لعملية الإرسال، مما يرفع من قيمة الخبر والرسول داخل البروتوكول الأمازيغي التقليدي، ويعزز الوزن الرمزي للتواصل المؤسساتي.",
        manuscript: "yuzn as abrid",
        analysis: "تحليل تداولي: إضفاء صبغة 'فعل سيادي' لتعزيز المكانة القبلية للمرسل وللرسالة المنقولة في النسق القبلي."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    renderUltimateNexus(ultimateRepository);
    const countDisplay = document.getElementById('master-count');
    if (countDisplay) countDisplay.innerText = ultimateRepository.length;
});

/**
 * Renders the High-End Cinematic Lexical Artifacts
 */
function renderUltimateNexus(data) {
    const hub = document.getElementById("results-ultimate");
    if (!hub) return;

    hub.innerHTML = "";

    if (data.length === 0) {
        hub.innerHTML = `
            <div style="text-align:center; padding:10rem 2rem; background:white; border-radius:48px; border:2px dashed #eee;">
                <i class="fas fa-microscope fa-5x" style="opacity:0.02; color:var(--i-navy); margin-bottom:2rem;"></i>
                <h3 style="color:var(--i-navy); font-weight:900;">Intelligence Acquisition Failed</h3>
                <p style="color:#64748b;">لم يتم العثور على أي مادة لسانية تطابق مصفوفة الاستعلام</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const article = document.createElement("article");
        article.className = "lexical-artifact ultimate-reveal";
        article.innerHTML = `
            <div class="artifact-header-zenith">
                <h2 class="lemma-pinnacle">${item.lemma}</h2>
                <span class="ipa-pinnacle">${item.ipa}</span>
            </div>

            <div class="artifact-matrix">
                <div class="matrix-node">
                    <h4><i class="fas fa-fingerprint"></i> الجذر اللساني / Root</h4>
                    <p style="font-family:monospace; color:var(--i-gold); font-size:2.4rem; font-weight:950;">${item.root}</p>
                </div>

                <div class="matrix-node">
                    <h4><i class="fas fa-dna"></i> التوصيف الصرفي / Morph</h4>
                    <p>${item.morph}</p>
                </div>

                <div class="pragmatic-radar">
                    <h4><i class="fas fa-brain"></i> هندسة الشحنة التداولية / Pragmatic Engineering</h4>
                    <div class="radar-track">
                        <div class="radar-fill"></div>
                        <div class="radar-pointer" style="right: ${item.charge_val}%;"></div>
                    </div>
                    <div class="logic-mastery">
                        <strong style="color:var(--i-gold); font-size:1.6rem; display:block; margin-bottom:20px;">${item.tag}</strong>
                        <p>${item.logic}</p>
                    </div>
                </div>

                <div class="matrix-node">
                    <h4><i class="fas fa-language"></i> الدلالة المعجمية / Denotation</h4>
                    <p>${item.meaning}</p>
                </div>

                <div class="matrix-node">
                    <h4><i class="fas fa-map-pin"></i> النطاق اللهجي / Dialect</h4>
                    <p>${item.tribe}</p>
                </div>

                <div class="corpus-vault-imperial">
                    <span class="manuscript-prime">"${item.manuscript}"</span>
                    <p class="analysis-prime">
                        <i class="fas fa-user-graduate"></i> الاستقصاء اللساني: ${item.analysis}
                    </p>
                </div>
            </div>

            <div style="margin-top:6rem; padding:35px; background:#f8fafc; border-radius:30px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:1rem; color:#94a3b8; font-weight:900;"><i class="fas fa-shield-alt"></i> Digital Academic DOI: 10.AMAWAL/ULT/${item.id}</span>
                <span style="color:var(--i-navy); font-weight:900;">Verified v11.0</span>
            </div>
        `;
        hub.appendChild(article);
    });
}

/**
 * Intelligent Cinematic Search
 */
function ultimateSearch() {
    const q = document.getElementById("ultimate-search").value.toLowerCase().trim();
    const filtered = ultimateRepository.filter(i =>
        i.lemma.toLowerCase().includes(q) ||
        i.root.toLowerCase().includes(q) ||
        i.logic.toLowerCase().includes(q) ||
        i.tribe.toLowerCase().includes(q)
    );
    renderUltimateNexus(filtered);
}

/**
 * Navigation Architecture
 */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    // منع تمرير الصفحة الرئيسية عند فتح القائمة لضمان نقاء الواجهة
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function toggleSidebarSubnav() {
    const subnav = document.getElementById('sidebar-subnav');
    subnav.style.display = subnav.style.display === "block" ? "none" : "block";
}

function switchPane(id, btn) {
    document.querySelectorAll('.pane-container').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.sidebar-nav a, .nav-item').forEach(a => a.classList.remove('active'));
    if (btn) btn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
