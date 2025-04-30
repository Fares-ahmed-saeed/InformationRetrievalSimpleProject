const documents = [
    { id: 1, title: "الذكاء الاصطناعي في مصر", content: "الذكاء الاصطناعي يشهد نمواً سريعاً في مصر، حيث تستخدم الشركات الناشئة تقنيات حديثة لتطوير حلول مبتكرة في القاهرة والإسكندرية.", category: "AI" },
    { id: 2, title: "Introduction to Information Retrieval", content: "Information retrieval is the process of obtaining relevant information from a collection of resources, typically using search queries.", category: "IR" },
    { id: 3, title: "استرجاع البيانات باستخدام النماذج البوليانية", content: "النماذج البوليانية تُستخدم في استرجاع البيانات لمطابقة الوثائق بناءً على وجود الكلمات المفتاحية أو عدم وجودها.", category: "IR" },
    { id: 4, title: "Machine Learning in AI", content: "Machine learning is a subset of artificial intelligence that enables systems to learn from data and improve performance over time.", category: "AI" },
    { id: 5, title: "تطبيقات الذكاء الاصطناعي في الرعاية الصحية", content: "يُستخدم الذكاء الاصطناعي في الرعاية الصحية لتحليل البيانات الطبية، تشخيص الأمراض، وتحسين جودة العلاج.", category: "AI" },
    { id: 6, title: "Vector Space Model in IR", content: "The vector space model represents documents and queries as vectors in a high-dimensional space to measure similarity.", category: "IR" },
    { id: 7, title: "تعلم الآلة في استرجاع البيانات", content: "تعلم الآلة يساعد في تحسين أنظمة استرجاع البيانات من خلال تصنيف الوثائق وتحديد الأولويات بناءً على الصلة.", category: "IR" },
    { id: 8, title: "Natural Language Processing in AI", content: "Natural language processing enables computers to understand and generate human language, widely used in chatbots and search engines.", category: "AI" },
    { id: 9, title: "تحديات استرجاع البيانات متعددة اللغات", content: "استرجاع البيانات متعددة اللغات يواجه تحديات مثل التعامل مع الترجمة والسياقات الثقافية المختلفة.", category: "IR" },
    { id: 10, title: "Deep Learning for Information Retrieval", content: "Deep learning techniques, such as neural networks, are used to enhance the accuracy of information retrieval systems.", category: "IR" },
    { id: 11, title: "تاريخ مصر الحديث", content: "مصر لديها تاريخ غني يمتد لآلاف السنين، منذ عصر الفراعنة إلى العصر الحديث. القاهرة هي مركز الثقافة والتاريخ.", category: "Other" },
    { id: 12, title: "Egypt's Technological Advancements", content: "Egypt has made significant strides in technology, with startups in Cairo and Alexandria leading innovation in AI and fintech.", category: "Other" },
    { id: 13, title: "السياحة في مصر", content: "تعتبر مصر وجهة سياحية عالمية بفضل الأهرامات والبحر الأحمر، وتجذب الملايين سنوياً.", category: "Other" },
    { id: 14, title: "ثقافة القهوة في مصر", content: "القهوة جزء لا يتجزأ من الثقافة المصرية، حيث يجتمع الناس في المقاهي للحديث والاستمتاع بالوقت.", category: "Other" },
    { id: 15, title: "Renewable Energy in Egypt", content: "Egypt is investing heavily in renewable energy, with projects like the Benban Solar Park leading the way in sustainable development.", category: "Other" },
    { id: 16, title: "تطبيقات البيانات الضخمة في الأعمال التجارية", content: "البيانات الضخمة تُستخدم لتحليل سلوك العملاء وتحسين العمليات التجارية وزيادة الكفاءة في القطاعات المختلفة.", category: "BigData" },
    { id: 17, title: "Big Data Technologies and Tools", content: "Big data technologies like Hadoop and Spark enable processing and analysis of massive datasets for actionable insights.", category: "BigData" },
    { id: 18, title: "الحوسبة السحابية ودورها في التحول الرقمي", content: "الحوسبة السحابية توفر بنية تحتية مرنة وقابلة للتطوير، مما يدعم التحول الرقمي في الشركات والمؤسسات.", category: "Cloud" },
    { id: 19, title: "Cloud Computing Architectures", content: "Cloud computing architectures, such as AWS and Azure, provide scalable solutions for storage, computing, and analytics.", category: "Cloud" },
    { id: 20, title: "تحليل البيانات لاتخاذ القرارات الاستراتيجية", content: "تحليل البيانات يساعد الشركات على اتخاذ قرارات مستنيرة بناءً على رؤى مستخلصة من البيانات.", category: "Analytics" },
    { id: 21, title: "Data Analytics for Business Intelligence", content: "Data analytics transforms raw data into meaningful insights, driving business intelligence and competitive advantage.", category: "Analytics" },
    { id: 22, title: "التعلم العميق في معالجة الصور", content: "التعلم العميق يُستخدم في معالجة الصور لتطبيقات مثل التعرف على الوجوه واكتشاف الأشياء.", category: "AI" },
    { id: 23, title: "Deep Learning Applications in NLP", content: "Deep learning enhances natural language processing tasks like sentiment analysis, translation, and text generation.", category: "AI" },
    { id: 24, title: "أمن البيانات في أنظمة الذكاء الاصطناعي", content: "أمن البيانات ضروري لحماية أنظمة الذكاء الاصطناعي من التهديدات السيبرانية وضمان الخصوصية.", category: "AI" },
    { id: 25, title: "Cybersecurity in AI Systems", content: "Cybersecurity measures protect AI systems from data breaches and ensure the integrity of machine learning models.", category: "AI" },
    { id: 26, title: "تطوير الواجهات الأمامية (Frontend) وأهم الأدوات", content: "تطوير الواجهات الأمامية يركز على بناء واجهات مستخدم تفاعلية باستخدام أدوات مثل React وVue.js.", category: "Frontend" },
    { id: 27, title: "Frontend Development and Modern Frameworks", content: "Frontend development leverages frameworks like React, Angular, and Vue.js to create responsive and dynamic user interfaces.", category: "Frontend" },
    { id: 28, title: "تطوير الواجهات الخلفية (Backend) وإدارة قواعد البيانات", content: "تطوير الواجهات الخلفية يتضمن إدارة الخوادم وقواعد البيانات باستخدام تقنيات مثل Node.js وDjango.", category: "Backend" },
    { id: 29, title: "Backend Development with Server-Side Technologies", content: "Backend development involves building server-side applications using technologies like Node.js, Python, and Java.", category: "Backend" },
    { id: 30, title: "تصميم واجهات وتجربة المستخدم (UI/UX) لتحسين التطبيقات", content: "تصميم UI/UX يهدف إلى تحسين تجربة المستخدم من خلال واجهات جذابة وسهلة الاستخدام.", category: "UIUX" },
    { id: 31, title: "UI/UX Design Principles for User-Centric Applications", content: "UI/UX design focuses on creating intuitive and visually appealing interfaces to enhance user satisfaction.", category: "UIUX" },
    { id: 32, title: "عمليات التطوير والنشر (DevOps) لتسريع دورة التطوير", content: "DevOps يدمج التطوير والعمليات لتسريع النشر باستخدام أدوات مثل Docker وKubernetes.", category: "DevOps" },
    { id: 33, title: "DevOps Practices for Continuous Integration and Deployment", content: "DevOps practices enable continuous integration and deployment using tools like Jenkins, Docker, and Kubernetes.", category: "DevOps" }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearSearch = document.getElementById('clearSearch');
const categoryFilter = document.getElementById('categoryFilter');
const resultsCount = document.getElementById('resultsCount');
const resultsDiv = document.getElementById('results');
const toggleDarkMode = document.getElementById('toggleDarkMode');

// Function to display documents with highlighting
function displayDocuments(docs, query) {
    resultsCount.innerHTML = '';
    resultsDiv.innerHTML = '';
    if (docs.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">لا توجد نتائج مطابقة</p>';
        return;
    }
    resultsCount.innerHTML = `تم العثور على ${docs.length} نتيجة`;
    docs.forEach(doc => {
        const docDiv = document.createElement('div');
        docDiv.className = 'document';
        const highlightedTitle = query ? doc.title.replace(
            new RegExp(`(${query})`, 'gi'),
            '<span style="background-color: yellow;">$1</span>'
        ) : doc.title;
        const highlightedContent = query ? doc.content.replace(
            new RegExp(`(${query})`, 'gi'),
            '<span style="background-color: yellow;">$1</span>'
        ) : doc.content;
        docDiv.innerHTML = `
            <h3>${highlightedTitle}</h3>
            <p>${highlightedContent}</p>
        `;
        resultsDiv.appendChild(docDiv);
    });
}

// Search function
function searchDocuments(query) {
    const category = categoryFilter.value;
    if (!query.trim() && !category) {
        resultsCount.innerHTML = '';
        resultsDiv.innerHTML = '<p class="initial-message">اكتب كلمة أو اختر فئة للبحث عن الوثائق</p>';
        return;
    }
    const lowerQuery = query.toLowerCase();
    const filteredDocs = documents.filter(doc =>
        (!category || doc.category === category) &&
        (doc.title.toLowerCase().includes(lowerQuery) ||
         doc.content.toLowerCase().includes(lowerQuery))
    );
    displayDocuments(filteredDocs, query);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Event listeners
searchInput.addEventListener('input', debounce(() => {
    searchDocuments(searchInput.value);
}, 300));

searchButton.addEventListener('click', () => {
    searchDocuments(searchInput.value);
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = '';
    searchDocuments('');
});

categoryFilter.addEventListener('change', () => {
    searchDocuments(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchDocuments(searchInput.value);
    }
});

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.innerHTML = document.body.classList.contains('dark-mode') ?
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
   
   
