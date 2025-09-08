import { User } from "../models/User.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.createJWT();

    await user.save({ validateBeforeSave: false });
    return { accessToken };
  } catch (error) {
    throw new ApiError(500, "Error generating tokens");
  }
};

//register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      throw new ApiError(409, "User already exists");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password ");

    if (!createdUser) {
      throw new ApiError(500, "User creation failed");
    }

    // ✅ Generate access token
    const { accessToken } = await generateAccessToken(createdUser._id);

    const options = { httpOnly: true, secure: true };

    return res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .json(
        new ApiResponse(
          201,
          { user: createdUser, accessToken },
          "User registered successfully"
        )
      );
  } catch (error) {
    // console.log(error.message);
    throw new ApiError(400, error.message);
  }
});

//login user
const loginUser = asyncHandler(async (req, res) => {
  // console.log("res.json type:", typeof res.json);
  // console.log("res keys:", Object.keys(res));
  // console.log("✅ loginUser reached");

  const { email, password } = req.body;
  if (!email) {
    throw new ApiError(400, "Please provide email or username ");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordMatched = await user.isPasswordCorrect(password);

  if (!isPasswordMatched) {
    throw new ApiError(401, "Password is incorrect");
  }

  const { accessToken } = await generateAccessToken(user._id);

  const loggedInUser = await User.findById(user._id).select("-password");

  const options = {
    httpOnly: true,
    secure: true,
  };
  // console.log("res.json right before return:", typeof res.json);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken },
        "User logged in successfully"
      )
    );
});

//logout user
const logoutUser = asyncHandler(async (req, res) => {
  //clear the cookies
  //remove the refresh token from the user document

  await User.findByIdAndUpdate(req.user._id, {
    new: true,
  });

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

//change password
const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Wrong old Password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Your password is changed succesfully"));
});

//get user
const getCurrentUser = asyncHandler((req, res) => {
  try {
    return res
      .status(200)
      .json(
        new ApiResponse(200, req.user, "current user fetched successfully")
      );
  } catch (error) {
    throw new ApiError(404, " error occured while fetching user ");
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
};
