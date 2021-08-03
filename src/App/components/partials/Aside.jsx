import React from "react";
import author from "../../assets/author.jpg";
import TagButton from "../buttons/TagButton";
import WidgetHeader from "../WidgetHeader";
import fb from "../../assets/social/fb.svg";
import pinterest from "../../assets/social/pint.svg";
import vimeo from "../../assets/social/vimeo.svg";
import dribble from "../../assets/social/dribbble.svg";
import twitter from "../../assets/social/twitter.svg";
import behance from "../../assets/social/behance.svg";
import inst from "../../assets/social/inst.svg";
import youtube from "../../assets/social/youtube.svg";
import googleplus from "../../assets/social/gplus.svg";
import SocialButton from "../buttons/SocialButton";
import CathegoryButton from "../buttons/CathegoryButton";
import FeatureCard from "../cards/FeatureCard";

export default function Aside({data}) {
  const tagArray = [
    "Business",
    "Freelance",
    "Money",
    "Experience",
    "Lifestyle",
    "SEO",
    "Wordpress",
    "Marketing",
    "UX",
    "Modern",
    "Success",
    "Nature",
  ];
  const social = [
    { picture: fb, descr: "32k likes" },
    { picture: pinterest, descr: "814 followers" },
    { picture: vimeo, descr: "165 followers" },
    { picture: dribble, descr: "6k followers" },
    { picture: twitter, descr: "130k followers" },
    { picture: behance, descr: "37k followers" },
    { picture: inst, descr: "854k followers" },
    { picture: youtube, descr: "52k followers" },
    { picture: googleplus, descr: "642k followers" },
  ];
  const cathegory = [
    { name: "Style & clothes", times: "(7)" },
    { name: "Minimalism", times: "(16)" },
    { name: "Black & White", times: "(5)" },
    { name: "Modern clothes", times: "(12)" },
  ];

  const featurePosts = [];
  for (let i = 0; i<3; i++){
      featurePosts.push(data[i]);
  }
  return (
    <aside>
      <div className="widget-container">
        <WidgetHeader name={"About the author"} />
        <div className="about-author-card">
          <div className="aside-img-container">
            <img src={author} alt="Ekaterina Miroshnichenko" />
          </div>

          <div className="aside-card-text-container">
            <h4 className="text-author">Ekaterina Miroshnichenko</h4>
            <p className="author-empl">Основатель бренда EMI</p>
            <p className="author-descr">
              Чемпионка мира по дизайну ногтей (Париж, 2010), двукратная
              чемпионка Европы (Афины, Париж, 2009), судья международной
              категории
            </p>
            <button className="author-button">Continue Reading</button>
          </div>
        </div>
      </div>

      <div className="widget-container" id="features">
        <WidgetHeader name={"Featured posts"} />
        <div className="featured-post-card">
        {featurePosts.map(el => {
            return <FeatureCard key={el.ID} el={el} />
        })}
        </div>
      </div>
      <div className="widget-container">
        <div className="widget-title">
          <span>Categories</span>
        </div>
        <div className="categories-container">
          {cathegory.map((el) => {
            return <CathegoryButton key={el.name} el={el} />;
          })}
        </div>
      </div>

      <div className="widget-container" id="socialMedia">
        <WidgetHeader name={"Social media"} />
        <div className="social-media-container">
          {social.map((el) => {
            return <SocialButton key={el.descr} el={el} />;
          })}
        </div>
      </div>
      <div className="widget-container" id="tags">
        <WidgetHeader name={"Tags"} />
        <div className="tags-container">
          {tagArray.map((el) => {
            return <TagButton key={el} tagName={el} />;
          })}
        </div>
      </div>
    </aside>
  );
}
