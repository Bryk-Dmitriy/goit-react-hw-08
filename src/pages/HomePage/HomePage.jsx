import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePageWrapper}>
      This is a notebook-style site where you can store a list of contacts. The
      data is saved on a server, and there are user registration and login
      features. Navigation between pages is handled with React Router, and state
      management is done using Redux. The functionality is not complete yet, and
      more features will be added in the future.
    </div>
  );
};

export default HomePage;
