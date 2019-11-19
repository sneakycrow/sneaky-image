use http::{StatusCode};
use now_lambda::{error::NowError, IntoResponse, Request, Response};
use image::{DynamicImage};
use image::ImageOutputFormat::PNG;

fn handler(req: Request) -> Result<impl IntoResponse, NowError> {
  // Get the path
  let uri = req.uri();
  // Split the path
  let uri_split = uri.path().split("/");
  // Create a Vector containing each parameter
  let parameters = uri_split.collect::<Vec<&str>>();
  // The first parameter [1] (0 is the first "/") and the second parameter [2] are our values for (x, y)
  let img_x = parameters[1].parse::<u32>().unwrap();
  let img_y = parameters[2].parse::<u32>().unwrap();
  // Create our buffer for serving later
  let mut buffer = Vec::new();
  // Create our dynamic image
  let img = DynamicImage::new_rgb8(img_x, img_y);
  // Write to our buffer
  img.write_to(&mut buffer, PNG);
  // Build our response
  let response = Response::builder().status(StatusCode::OK).header("Content-Type", "image/png").body(buffer).expect("Interal Server Error");
  // Server our response
  Ok(response)
}