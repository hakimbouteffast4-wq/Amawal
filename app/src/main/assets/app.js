/**
 * AMAWAL IMPERIAL - The Sovereign PhD Research Suite
 * Version: 10.5.0 Elite Academic Edition
 * Field Atlas: Boulemane Region
 */

const imperialRepository = [
    {
        id: "IMP-101",
        lemma: "Iswa / ⵉⵙⵡⴰ",
        ipa: "[is.'wa]",
        root: "√SW",
        aspect: "Aspect: Perfective / فعل تام",
        tribe: "إقليم بولمان (مشترك جغرافياً)",
        confidence: "Verified Field Data [1.00]",
        meaning: "الاستيعاب الفيزيولوجي للسوائل والمواد العضوية.",
        charge_index: 85,
        charge_tag: "Dominance Act / الاستحواذ الرمزي",
        logic_deep: "ينزاح الفعل من دلالته الحيوية (الارتواء) ليصبح 'فعل كلام إنجازي' يعبر عن التمكن والمصادرة. شرب 'تاسيلا' أو 'الكأس' هو فعل تملك مكاني واجتماعي عميق يمنح المتحدث سلطة رمزية داخل النسق الثقافي المحلي.",
        manuscript: "turud unna wr irri lḥma iddud iswit",
        analysis_logic: "الارتقاء المعرفي: تحول من الاستهلاك العضوي إلى الهيمنة التداولية المطلقة عبر الاستعارة."
    },
    {
        id: "IMP-102",
        lemma: "Iraḥ / ⵉⵔⴰⵃ",
        ipa: "[i.'rah]",
        root: "√RḤ",
        aspect: "Movement: Telic / حركة غائية",
        tribe: "أيت وراين / أيت يوسي",
        confidence: "Validated Archive [0.97]",
        meaning: "الانتقال الجغرافي القطعي والنهائي من الحيز المكاني.",
        charge_index: 15,
        charge_tag: "Severance Act / فعل القطيعة الانفعالية",
        logic_deep: "يرتبط 'Iraḥ' بحالات التأزم النفسي والاجتماعي. هو رحيل مشوب بالانفعال السلبي (غضب/هجر قسري)، مما يفرقه جوهرياً عن أفعال الحركة المحايدة. يجسد حالة 'الهباء المكاني' الناتج عن تدهور الروابط بين الأفراد والمجال.",
        manuscript: "hiya tssuffy i, irəḥ iqqim iggur",
        analysis_logic: "الاستقصاء التحليلي: الفعل يجسد 'الأثر التداولي الناتج' عن حالة الصراع الاجتماعي والرحيل القسري."
    },
    {
        id: "IMP-103",
        lemma: "Ifta / ⵉⴼⵜⴰ",
        ipa: "[if.'ta]",
        root: "√FT",
        aspect: "Atelic Motion / حركة بسيطة",
        tribe: "أيت يوسي",
        confidence: "Standardized Field Entry [1.00]",
        meaning: "المشي أو التوجه الاعتيادي نحو وجهة جغرافية.",
        charge_index: 50,
        charge_tag: "Reference Act / الفعل المرجعي المحايد",
        logic_deep: "يمثل الوحدة اللسانية 'الصفرية' في ميزان الشحنات. هو فعل واصف (Descriptive) يستخدم في بناء المشاهد الوصفية دون مقصدية انفعالية، مما يجعله فعلاً إخبارياً محضاً يستخدم لتأطير حركة الشخوص في السرد المادي.",
        manuscript: "Ifta s udrar",
        analysis_logic: "الملاحظة العلمية: غياب المقصدية الانفعالية يجعل منه وحدة لسانية واصفة للمشهد المادي والمكاني الصرف."
    },
    {
        id: "IMP-104",
        lemma: "Yuzn / ⵢⵓⵣⵏ",
        ipa: "[ju.'zen]",
        root: "√ZN",
        aspect: "Illocutionary Act / فعل تواصل قولي",
        tribe: "مرموشة",
        confidence: "Verified Protocol Data [0.98]",
        meaning: "البعث أو الإرسال الرسمي لرسول أو خبر أو عهد.",
        charge_index: 95,
        charge_tag: "Reverence Act / فعل التوقير الرسمي",
        logic_deep: "يرتبط بسياقات العهود والرسائل القبلية الكبرى. يمنح الفعل صبغة 'شرعية' لعملية الإرسال، مما يرفع من قيمة الخبر والرسول داخل البروتوكول الأمازيغي التقليدي، ويعزز الوزن الرمزي للتواصل المؤسساتي بين القبائل.",
        manuscript: "yuzn as abrid",
        analysis_logic: "تحليل تداولي: إضفاء صبغة 'فعل سيادي' لتعزيز المكانة القبلية للمرسل وللرسالة المنقولة."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initImperialInterface(imperialRepository);
    const totalVal = document.getElementById('total-val');
    if (totalVal) totalVal.innerText = imperialRepository.length;
});

/**
 * Renders the Ultra-Premium Lexical Articles
 */
function initImperialInterface(data) {
    const hub = document.getElementById("results-imperial");
    if (!hub) return;

    hub.innerHTML = "";

    if (data.length === 0) {
        hub.innerHTML = `
            <div style="text-align:center; padding:10rem 2rem; background:white; border-radius:40px; border:2px dashed #eee;">
                <i class="fas fa-microscope fa-5x" style="opacity:0.03; color:var(--brand-dark); margin-bottom:2rem;"></i>
                <h3 style="color:var(--brand-dark); font-weight:900;">Intelligence Scan Failure</h3>
                <p style="color:#64748b;">لم يتم العثور على أي مادة لسانية تطابق مصفوفة الاستعلام</p>
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const article = document.createElement("article");
        article.className = "master-card stunning-reveal";
        article.innerHTML = `
            <div class="card-decoration"></div>
            <div class="artifact-id" style="position:absolute; top:40px; left:60px; font-weight:900; color:#94a3b8; font-size:0.8rem;">REF: ${item.id}</div>

            <div class="card-header-zenith">
                <h2 class="lemma-hero">${item.lemma}</h2>
                <span class="ipa-hero academic-ipa">${item.ipa}</span>
            </div>

            <div class="card-grid-nexus">
                <div class="node-imperial">
                    <h4><i class="fas fa-fingerprint"></i> الجذر اللساني / Root</h4>
                    <p style="font-family:monospace; color:var(--brand-accent); font-size:2.4rem; font-weight:900;">${item.root}</p>
                </div>

                <div class="node-imperial">
                    <h4><i class="fas fa-dna"></i> التوصيف الصرفي / Morph</h4>
                    <p>${item.aspect}</p>
                </div>

                <div class="pragmatic-master-lab">
                    <h4><i class="fas fa-brain"></i> هندسة الشحنة التداولية / Pragmatic Engineering</h4>
                    <div class="spectrum-track">
                        <div class="spectrum-fill"></div>
                        <div class="nexus-pointer spectrum-cursor" style="right: ${item.charge_index}%;"></div>
                    </div>
                    <div class="logic-imperial">
                        <strong style="color:var(--brand-accent); font-size:1.5rem; display:block; margin-bottom:15px;">${item.charge_tag}</strong>
                        <p>${item.logic_deep}</p>
                    </div>
                </div>

                <div class="node-imperial">
                    <h4><i class="fas fa-language"></i> الدلالة المعجمية / Semantics</h4>
                    <p>${item.meaning}</p>
                </div>

                <div class="node-imperial">
                    <h4><i class="fas fa-map-pin"></i> النطاق اللهجي / Dialect</h4>
                    <p>${item.tribe}</p>
                </div>

                <div class="corpus-imperial-vault">
                    <span class="manuscript-text-prime">"${item.manuscript}"</span>
                    <p class="manuscript-analysis-prime">
                        <i class="fas fa-user-graduate"></i> الاستقصاء التحليلي: ${item.analysis_logic}
                    </p>
                </div>
            </div>

            <div style="margin-top:5rem; padding:30px; background:#f8fafc; border-radius:25px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.9rem; color:#94a3b8; font-weight:800;"><i class="fas fa-shield-alt"></i> Digital Academic Certificate Verified</span>
                <button class="pill" style="padding:10px 25px; border-radius:50px; background:var(--brand-dark); color:white; border:none; font-weight:900; cursor:pointer;" onclick="copyCite('${item.lemma}')">نسخ المرجع العلمي</button>
            </div>
        `;
        hub.appendChild(article);
    });
}

/**
 * Strategic Imperial Search
 */
function imperialSearch() {
    const q = document.getElementById("master-search").value.toLowerCase().trim();
    const filtered = imperialRepository.filter(i =>
        i.lemma.toLowerCase().includes(q) ||
        i.root.toLowerCase().includes(q) ||
        i.logic_deep.toLowerCase().includes(q) ||
        i.tribe.toLowerCase().includes(q)
    );
    initImperialInterface(filtered);
}

function copyCite(lemma) {
    const cite = `Project Amawal Imperial (2024). Lexical Entry: [${lemma}]. PhD Digital Suite, Sovereign Edition v10.5.`;
    navigator.clipboard.writeText(cite);
    alert("تم نسخ المرجع الأكاديمي بنجاح!");
}

/**
 * Navigation Architecture
 */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function toggleSidebarSubnav() {
    const subnav = document.getElementById('sidebar-subnav');
    subnav.style.display = subnav.style.display === "block" ? "none" : "block";
}

function switchPane(id, btn) {
    document.querySelectorAll('.pane-view').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.sidebar-nav a, .nav-item').forEach(a => a.classList.remove('active'));
    if (btn) btn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
