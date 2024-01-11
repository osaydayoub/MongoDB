import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    unique: [true, "This name is already in use"],
  },
  category: {
    type: String,
    required: [true, "Must provide a category"],
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: [true, "Must provide details.description"],
      validate: {
        validator: function (v) {
          return v.length >= 10;
        },
      },
    },
    price: {
      type: Number,
      required: [true, "Must provide details.Price"],
      validate: {
        validator: function (v) {
          return v > 0;
        },
      },
    },
    discount: {
      type: Number,
      default: 0,
    },

    images: {
      type: [String],
      validate: {
        validator: function (v) {
          if (v) {
            return v.length === 2;
          }
          return false;
        },
      },
    },
    phone: {
      type: String,
      required: [true, "Must provide details.phone"],
      validate: {
        validator: function (v) {
          const regularExp =
            /^(0(?:[23489]|5[0-689]|7[2346789])(?![01])(\d{7}))|(1(?:[7-9])00(\d{6}))|(1599(\d{6}))$/;
          return regularExp.test(v);
        },
      },
      message: (props) =>
        `${props.value} is not a valid  Israeli phone number!`,
    },
    DateAdded: {
      type: Date,
      default: Date.now(),
    },
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
