from sar_image_colorizer.model import MainModel
from sar_image_colorizer.dataloader import make_dataloaders
from sar_image_colorizer.train import train_model

# Example: Training
train_paths = ["/path/to/train/image1.png", "/path/to/train/image2.png"]
val_paths = ["/path/to/val/image1.png", "/path/to/val/image2.png"]
train_dl = make_dataloaders(paths=train_paths, split='train', batch_size=2)
val_dl = make_dataloaders(paths=val_paths, split='val', batch_size=2)
model = MainModel()
train_model(model, train_dl, val_dl, epochs=1)

# Example: Inference (pseudo-code, as actual inference logic may vary)
# from PIL import Image
# import torch
# img = Image.open("/path/to/sar/image.png").convert("RGB")
# # Preprocess as in ColorizationDataset
# # model.eval()
# # with torch.no_grad():
# #     output = model.net_G(preprocessed_img)
# #     # Postprocess output as needed 