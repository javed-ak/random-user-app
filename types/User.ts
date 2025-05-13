export type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    country: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  phone: string;
  picture: {
    large: string;
    thumbnail: string;
  };
};
