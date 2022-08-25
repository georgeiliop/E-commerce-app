import "./directory.scss";
import CategoryItem from "../category-item/CategoryItem";

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: "Tops",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Bottoms",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Accessories",
      imageUrl: "",
    },
    {
      id: 4,
      title: "Collectibles",
      imageUrl: "",
    },
    {
      id: 5,
      title: "Books",
      imageUrl: "",
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
