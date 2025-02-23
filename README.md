# TRT World Assignment News Website (Next.js)

This is a responsive news website built for the TRT World assignment. The application fetches and displays the latest news dynamically using a JSON server. News images are stored on Cloudinary, and the UI is styled based on a given Figma design.

## 🚀 Live Demo
- 🌐 Live Project👉 https://trt-world.vercel.app/
## 📡 Json Server
-  JSON Server API👉 https://github.com/ycihan0/TRTWorldAPI
-  Deployed from render.com👉 https://trtworldapi.onrender.com

## 🛠️ Technologies Used
- **Next.js** (15.1.7) 
- **React** (19.0.0)
- **Typescript** 
- **Date-fns** - Date formatting
- **HTML React Parser** - Parsing HTML content from JSON
- **React Icons** - Icons library
- **Cloudinary** - Hosting images
- **JSON Server** - Mock API deployed on Render
- **Custom CSS** - Styled based on the provided Figma file

## 📂 Project Structure
```
app/
 ├── [category]/[slug]/[id]/  # Dynamic News Pages
 │   ├── NewsDetailPage.module.css 
 │   ├── page.tsx 
 │
 ├── components/  # Reusable Components
 │   ├── advert/ 
 │   ├── footer/ 
 │   ├── header/ 
 │   ├── mainNewsFeed/ - Component displaying the hero section and the latest main news
 │   ├── newsCard/ - Component by topic of news cards
 │   ├── newsList/ - Component containing news lists that can be reused based on incoming data
 │   ├── popularNews/ - Component that finds the most popular ones in the latest date based on the number of views in the incoming data
 │   ├── sidebar/ - Component showing sidebar news headlines
 │   ├── singleNews/ - Reusable component displaying the latest uploaded news for a specific category
 │   ├── topicHeader/ 
 │   ├── topStory/ - Component listing news articles based on tags and topics
 │
 ├── search/  # Search Page
 │   ├── page.tsx 
 │   ├── SearchPage.module.css 
 │
 ├── page.tsx - Home page that fetches API data and distributes it across components
 │
 ├── layout.tsx - General layout component including a persistent header and footer while dynamically rendering other pages
 │
 ├── types/
 │   ├── news.ts - Type definitions for the news data structure
```

## 📌 Features
- 📰 List latest news articles
- 🔍 Search for news
- 📄 View detailed news pages
- 🌍 Categories for different news topics
- 📱 Fully responsive UI
- 💻 Latest NextJs version

## 📜 Example Data Structure
```json
{
  "id": "24000535",
  "title": "Cutting-Edge Computing Advances Drive Research Innovation",
  "slug": "quantum-computing-ai",
  "subtitle": "Quantum advancements push AI capabilities further.",
  "publishedAt": "2025-02-19T12:00:00Z",
  "newsDate": "2025-02-19T09:45:00Z",
  "author": {
    "name": null,
    "image": null
  },
  "description": "Quantum computing is opening new possibilities for AI, making models faster and more efficient.",
  "source": "TRT World",
  "tags": [
    "Quantum Computing",
    "AI",
    "Technology"
  ],
  "image": "https://res.cloudinary.com/dlg7azrx0/image/upload/v1739800683/TRTWORLD/21470987_0-53-960-540_iettwj.jpg",
  "category": "Science",
  "content": "<h1>Quantum Computing Reshaping AI</h1>\n\n<p>Quantum technology is enabling AI models to process data at unprecedented speeds, enhancing their learning capabilities.</p>",
  "viewCount": 982,
  "video": {
    "link": null,
    "time": null
  }
}
```
## 📷 Screenshots From the Project
![kapak kopya](https://github.com/user-attachments/assets/e982b632-9cfe-4c70-aba2-7c1d7ee46f8a)
## 📱 Responsive Design
It was designed to be 100% mobile-responsive. The CSS code was carefully written from scratch, based on the Figma design

![responsive kopya](https://github.com/user-attachments/assets/59948a27-e293-48d1-a0e5-5d19dff0f5fd)
## MainNewsFeed Component
- Component that changes according to the latest news with dynamic incoming data.
- It is shown under 3 related news according to the hero's tags.
- It is directed to the news detail page according to the clicked news.
- It lists the article authors and some news titles with the SideBar component.
- It lists the most viewed news on a certain date by sending props to the PopularNews component.
  
![MainNewsFeed kopya](https://github.com/user-attachments/assets/5af94362-6db7-4083-bbf5-8c2c378ed248)
## NewsCard Component
- News received and news listed with specific topic data
- Listed by data sorted by the latest published news
- If the news has a video link, a play button is shown
- Date-fns library shows how long ago the news was published
- Clicking on the news will take you to the news detail page
  
![NewsCard kopya](https://github.com/user-attachments/assets/29e8c3c1-9e23-4142-a0df-f8e3fc96cf09)
## NesList Component
Reusable component that lists incoming news data. When clicked, it directs to the relevant news.

![NewsList kopya](https://github.com/user-attachments/assets/4278c351-2154-455a-8615-d8cff55e54e4)
## TopStory Component
- Retrieves news data by sending an API request
- Filters news according to a certain topic
- Sorts by publication date
- Shows those with authors separately
- If there is video data, the play button appears

![TopStory kopya](https://github.com/user-attachments/assets/9c684a1c-78a8-438d-a69d-f4054206c5cd)
## TopStory Component
- Component that shows the latest news in a certain category
- Lists authors with articles in the relevant category
  
![SingleNews kopya](https://github.com/user-attachments/assets/c2f0d853-2156-45bc-8e22-19a7e9dd8a6d)
## ✨ News Detail Page
- The endpoint was optimized to enhance search engine visibility and direct traffic to the relevant article.
- [categor]/[slug]/[id]
  
![endpoint kopya](https://github.com/user-attachments/assets/daada1af-6fc7-4f60-9d9b-601dd6302bd9)

- This is the page that shows the details of the news according to the news information received 
- On the right side, the tags of the news and similar news according to these tags are listed

![NewsDetail kopya](https://github.com/user-attachments/assets/faff481e-7cae-471a-88b1-e7b2e5b9f32c)

The news content that comes as json data is translated and listed with the html-react-parser library. In this way, headlines, videos and content are displayed in the correct format.

![NewsDetail2 kopya](https://github.com/user-attachments/assets/2a194270-8b24-41db-a637-436224442e56)

Related news according to tags are listed in read more. Recommended for those who want to continue reading

![NewsDetail3 kopya](https://github.com/user-attachments/assets/b9535edc-23f8-4cbc-b7b7-c4c6e20d20dc)

## 🔎Search Page
- json server endpointe searches according to the word entered from the input with the "q" parameter.
- search is made after the first 3 letters
- incoming news data is listed
- when clicked, it is directed to the news detail page
  
![search kopya](https://github.com/user-attachments/assets/71e7aa1f-cb7c-4fa6-be6a-acf107091131)


