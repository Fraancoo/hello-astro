import Geo from "./geo.interface";

export default interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
