import Presentation from "../../assets/banner/presentation_2023.jpg"

export interface Work {
    title: string,
    authors: Array<string>,
    tags: Array<string>,
    context: string,
    url: {
        [name: string]: string
    }
    preview: string,
};

export const data: {
    [key: string]: {
        overview: string,
        bannerUrl: string,
        works: Array<Work>
    }
} = {
    "2022-2023": {
        overview: "第一屆NCKU GDSC的成果發表會在國立成功大學總圖書館盛大舉辦。 匯集NLP, Flutter, 演算法視覺化, 網頁程式開發等多樣主題，快到下方作品列表了解更多！",
        bannerUrl: Presentation,
        works: [
            {
                title: "發現 NLP 之於生活，以致於我們…",
                authors: ["蔡易妏"],
                tags: ["NLP", "NLU", "NLG"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_發現 NLP 之於生活，以致於我們.png`,
                context: "NLP如一股潮流，深刻滲透生活之中，啟發我們踏上學習之旅，並孕育出兩個有趣而樸實的專案：一個關繫著文字的魔法，另一個則是創造聊天機器人的奇蹟。",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=815",
                    "簡報連結": "https://docs.google.com/presentation/d/1TlHshl9wE7TOptrbZT07JqDFygvB3aQg/edit?usp=sharing&ouid=110122040554637878510&rtpof=true&sd=true"
                }
            },
            {
                title: "單車節形象網站",
                authors: ["張維芹"],
                tags: ["Web"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_單車節形象網站.png`,
                context: "介紹單車節形象網站的開發歷程以及後續該如何優化開發流程。",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=1711",
                    "簡報連結": "https://docs.google.com/presentation/d/1r8nxLy9Lt2m6fP5AXf3PpstP0cGn_ZrYKwqij5P7sA4/edit?usp=sharing"
                }
            },
            {
                title: "Matchigo - 專案媒合平台",
                authors: ["林成鍇"],
                tags: ["Web"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_Matchigo - 專案媒合平台.png`,
                context: "以成大土芒果為意象，設計爲校園創新人才自發性專案的夥伴媒合系統，期望鼓動校園的自主學習和創新風氣",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=2153",
                    "簡報連結": "https://docs.google.com/presentation/d/1ixyg_GVJc0QAtHhST4tf9pXB4khN_toE/edit?usp=sharing&ouid=110122040554637878510&rtpof=true&sd=true"
                }
            },
            {
                title: "NCKU FEED - 成大人的美食地圖",
                authors: ["許晏綾"],
                tags: ["Web"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_NCKU FEED - 成大人的美食地圖.png`,
                context: "身在美食之都台南，能有個幫我們整理餐廳名單的網站絕對是必須的吧！ NCKU FEED 是個整理成大周圍1000多家餐廳的美食網站，不同於Google Map會被其他地標或是惡意評論干擾，我們讓網站的內容更聚焦於呈現個人化取向的餐廳的資訊，並附上多面向評分、評論、食記、收藏等功能，人人都是美食評論家。除此之外，因應選擇障礙的人越來越多，NCKU FEED也有全新功能來解決這些人們的困擾！",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=2536",
                    "簡報連結": "https://docs.google.com/presentation/d/1JxNZ0CqIRvMl76w-FnTcDHGcmiwADsRGVXoE9ca30Ws/edit?usp=sharing"
                }
            },
            {
                title: "Sorting Visualizer - 排序視覺魔法",
                authors: ["簡德彥"],
                tags: ["Algorithm"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_Sorting Visualizer - 排序視覺魔法.png`,
                context: "我們的專案致力於將排序算法以簡單而直觀的方式呈現在網頁上，讓大家能夠輕鬆地理解不同的排序方法。透過動畫和互動，我們將排序過程變得清晰明瞭，無論您是否擁有程式經驗。這個專案的目標是讓排序變得更容易理解，並為學習者提供有趣的方式來探索不同的排序算法。",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=5891",
                    "簡報連結": "https://docs.google.com/presentation/d/1OTktSX7773nsW7KCXC4eu0sg6HI-vSoZ/edit?usp=sharing&ouid=110122040554637878510&rtpof=true&sd=true"
                }
            },
            {
                title: "ML/AI 菜雞🐔實戰坊",
                authors: ["謝宗翰"],
                tags: ["AI"],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_ML_AI 菜雞實戰坊.png`,
                context: "菜雞們經過在新手村打滾了一學期，讓我們來一起看看這群0基礎的菜雞完成了什麼酷酷的專案們吧！",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=7074",
                    "簡報連結": "https://docs.google.com/presentation/d/1BTmXGuC6PLRGHQvf-mENom5aGV7XrREC2TA8w-T0aBI/edit?usp=sharing"
                }
            },
            {
                title: "Flutter跨平台應用程式開發",
                authors: ["何寬羿"],
                tags: ["App "],
                preview: `${process.env.PUBLIC_URL}/img/projects/2023/預覽圖_第 1 屆_Flutter跨平台應用程式開發.png`,
                context: "全員從零基礎開始學習Flutter後，我們選擇用一個App記錄一年來的經歷，並設立網站展示，讓大家能夠看見Flutter跨平台的優點~",
                url: {
                    "影片連結": "https://youtu.be/EtaMS67-nuo?t=7930",
                    "簡報連結": "https://docs.google.com/presentation/d/1bvrPCl_8pKX-CnDLfzPMPopD47wGCxBW/edit?usp=sharing&ouid=110122040554637878510&rtpof=true&sd=true"
                }
            },
        ]
    },
    "2023-2024": {
        overview: "",
        bannerUrl: "",
        works: []
    }
}
