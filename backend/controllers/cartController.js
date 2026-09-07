import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  try {
    const { foodId, quantity = 1 } = req.body;
    if (!foodId) {
      return res.status(400).json({
        message: "Food id is requred",
      });
    }
    const cart = await Cart.findOne({ userId: req.user });
    if (!cart) {
      cart = await Cart.create({
        userId: req.user,
        items: [
          {
            foodId,
            quantity,
          },
        ],
      });
      return res.status(201).json(cart);
    }

    const existingItem = cart.items.find(
      (item) => item.foodId.toString() === foodId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        foodId,
        quantity,
      });
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "failed to add item to cart",
      error: error.message,
    });
  }
};
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user }).populate(
      "items.foodId"
    );

    if (!cart) {
      return res.status(200).json({
        userId: req.user,
        items: [],
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { foodId } = req.params;
    const cart = await Cart.findOne({ userId: req.user });
    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }
    cart.items = cart.items.filter((item) => item.foodId.toString() !== foodId);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Failed to  remove item from cart",
      error: error.message,
    });
  }
};

export const updateCartQuantity = async (req, res) => {
  try {
    const { foodId } = req.params;
    const { quantity } = req.body;
    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        message: "Quantity must be at least 1",
      });
    }
    const cart = await Cart.findOne({ userId: req.user });
    if (!cart) {
      return res.status(400).json({
        message: "cart not found",
      });
    }
    const item = cart.items.find(
      (item) => item.foodId._id.toString() === foodId
    );

    if (!item) {
      return res.status(404).json({
        message: "food not found in cart",
      });
    }

    item.quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart quantity",
      error: error.message,
    });
  }
};
