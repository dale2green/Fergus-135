//
const blogPosts = [
  {
    title: "The Meaning Behind Our Signs and Tokens",
    date: "November 10, 2025",
    excerpt: "Explore the symbolism and purpose behind our cherished lodge traditions...",
    link: "#"
  },
  {
    title: "Community Spotlight: Country Kids",
    date: "October 25, 2025",
    excerpt: "Fergus Lodge supports Walton County’s youth through seasonal giving...",
    link: "#"
  },
  {
    title: "Secret Society or Society of Secrets",
    date: "October 25, 2025",
    excerpt: "The mysteries of Freemasonry: is it a secret society or a society of secrets?",
    link: "#"
  },
  {
    title: "Handshakes, Grips, Symbols: What Does It All Mean?",
    date: "October 25, 2025",
    excerpt: "Signs, grips, and symbols all lead to the mysteries of Freemasonry for the uninitiated...",
    link: "#"
  },
  /*   example to copy  */
  {
    title: "example to add more info",
    date: "October 25, 2025",
    excerpt: "whats this all mean?  How can i be a part of it...",
    link: "#"
  },
  /*   end example */
  {
    title: "Frequently Asked Questions",
    date: "Updated November 2025",
    excerpt: "Answers to common questions about Fergus Lodge, Freemasonry, and how to get involved.",
    link: "#",
    customHTML: `
      <section class="faq-section">
        <h4>Frequently Asked Questions</h4>
        <ul class="faq-list">
          <li><strong>Is Fergus Lodge open to visitors?</strong><br>Yes, we welcome inquiries and visits from those interested in Freemasonry. Contact us to learn more.</li>
          <li><strong>What do the symbols mean?</strong><br>Each symbol represents a moral lesson or historical tradition within Freemasonry.</li>
          <li><strong>How do I become a member?</strong><br>Start by asking a Mason. You can also <a href="./Forms/FERGUS_Petition_for_Degrees_of_Masonry_2016.pdf" target="_blank">download a petition</a>.</li>
        </ul>
      </section>
    `
  }
];

const blogList = document.getElementById("blog-posts");

blogPosts.forEach((post, index) => {
  const article = document.createElement("article");
  article.className = "blog-card";
  article.style.animationDelay = `${0.2 + index * 0.2}s`;

  const titleHTML = `<h3>${post.title}</h3>`;
  const dateHTML = post.date ? `<p class="blog-date">${post.date}</p>` : "";
  const excerptHTML = post.excerpt ? `<p>${post.excerpt}</p>` : "";
  const linkHTML = post.link ? `<a href="${post.link}" class="read-more">Learn More</a>` : "";

  if (post.customHTML) {
    article.innerHTML = `${titleHTML}${dateHTML}${excerptHTML}${post.customHTML}`;
  } else {
    article.innerHTML = `${titleHTML}${dateHTML}${excerptHTML}${linkHTML}`;
  }

  blogList.appendChild(article);
});


