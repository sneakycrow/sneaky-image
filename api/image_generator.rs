use http::{StatusCode};
use now_lambda::{error::NowError, IntoResponse, Request, Response};
use image::{DynamicImage};
use image::ImageOutputFormat::PNG;

fn handler(req: Request) -> Result<impl IntoResponse, NowError> {
  println!("{:?}", req.uri());
  let mut buffer = Vec::new();
  let img = DynamicImage::new_rgb8(100, 100);
  img.write_to(&mut buffer, PNG);

  let response = Response::builder().status(StatusCode::OK).header("Content-Type", "image/png").body(buffer).expect("Interal Server Error");
  Ok(response)
}