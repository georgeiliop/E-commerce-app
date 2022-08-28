import "./directory.scss";
import CategoryItem from "../category-item/CategoryItem";
import apparel from "../../assets/apparel.png";
import blueray from "../../assets/blueray.png";
import poster from "../../assets/poster.png";
import vinyl from "../../assets/vinyl.png";
import toys from "../../assets/toys.png";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Apparel",
      imageUrl: apparel,
    },
    {
      id: 2,
      title: "Blue-Rays",
      imageUrl: blueray,
    },
    {
      id: 3,
      title: "Posters",
      imageUrl: poster,
    },
    {
      id: 4,
      title: "Vinyls",
      imageUrl: vinyl,
    },
    {
      id: 5,
      title: "Toys & Games",
      imageUrl: toys,
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Directory;
