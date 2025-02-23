# TRT World Assignment News Website (Next.js)

This is a responsive news website built for the TRT World assignment. The application fetches and displays the latest news dynamically using a JSON server. News images are stored on Cloudinary, and the UI is styled based on a given Figma design.

## 🚀 Live Demo
- 🌐 Live Project👉 https://trt-world.vercel.app/
- 📡 JSON Server API👉 https://github.com/ycihan0/TRTWorldAPI

## 🛠️ Technologies Used
- **Next.js** (15.1.7) - Server-side rendering & static generation
- **React** (19.0.0) - UI library
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

---
**© 2025 TRT World News Project.**
