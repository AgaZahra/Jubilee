import React from 'react';
import BannerPages from '../components/BannerPages';

const Faq = () => {
  return (
   <>

   <BannerPages itemOne={'FAQ'} itemTwo={'Home'}/>

<div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2 className="faq-question">Q. Why Choose Shopify?</h2>
        <p className="faq-answer">
          Shopify provides You With a variety of tools to help You set up and run Your business. Depending on the plan that You choose, You can find everything You need to showcase Your products online, to process payments, and to make Your store work for You. Shopify offers:
          <ul>
            <li>Free and paid themes from the Shopify Theme Store to make Your store stand out and look great</li>
            <li>Free and paid apps from the Shopify App Store to expand on the existing functionality of Your store</li>
            <li>Shopify's own payment gateway to accept credit card payments</li>
            <li>Growth opportunities with Shopify's various sales channels as well as an enterprise plan for merchants who are selling in high volume and might be feeling the effects of accumulating transaction fees</li>
            <li>A Shopify blog that has guides and articles about running Your store and connecting with Your customers</li>
            <li>Experts all around the world that can help You set up, design, and market Your store</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Q. How do I install Shopify?</h2>
        <p className="faq-answer">
          Shopify is web-based ecommerce software. This means there’s no installation required and it works with all operating systems (including Windows and MacOS)! Shopify hosts the site itself so You don’t have to worry about installing, upgrading, or maintaining any software or web servers. Go here to install Shopify.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Q. An Introduction to the Marketplaces for Authors</h2>
        <p className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique vel est distinctio sequi. Maxime eos nostrum voluptate ullam esse earum molestias qui quo possimus illo eius et sunt aperiam magni fuga deleniti excepturi, quas doloremque ad officia dignissimos alias vero facilis dicta.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Q. What Images, Videos, Code or Music Can I Use in my Items?</h2>
        <p className="faq-answer">
          Architecto eum, aliquam. At repellendus, vitae dolorum facere, nesciunt commodi blanditiis voluptas atque? Veniam veritatis minus perspiciatis quam accusamus reiciendis ad sunt odit, quas vel autem, deserunt enim laborum molestiae unde pariatur error asperiores, cupiditate saepe.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Q. Tips for Increasing Your Referral Income</h2>
        <p className="faq-answer">
          Repellendus officiis eum modi quasi facere a ipsum at provident dicta totam reiciendis distinctio nisi, praesentium architecto laudantium odit perferendis, rerum, magni officia maiores velit iusto vel? Fugit accusantium suscipit, architecto accusamus nihil fugiat nobis sint numquam molestias fuga vel dolore harum aliquam.
        </p>
      </div>

      <div className="faq-item">
        <h2 className="faq-question">Q. How can I get support for an item which isn't working correctly?</h2>
        <p className="faq-answer">
          Sequi magnam saepe, necessitatibus veritatis distinctio eaque blanditiis natus, similique. Et fugiat atque illo perspiciatis, reiciendis nobis officia animi sint, a veniam nisi adipisci aliquam consequuntur libero. Sed dolorem, laudantium. Illum, qui, quam. Voluptas, sit, praesentium?
        </p>
      </div>
    </div>
   </>
  );
};

export default Faq;
