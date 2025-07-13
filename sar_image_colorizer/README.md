# SAR Image Colorizer

A modular PyTorch package for SAR image colorization using GANs and U-Net architectures.

## Installation

Clone this repo and install the required dependencies:

```bash
pip install torch torchvision scikit-image pillow tqdm
```

## Usage

### Training

```python
from sar_image_colorizer.model import MainModel
from sar_image_colorizer.dataloader import make_dataloaders
from sar_image_colorizer.train import train_model

train_paths = ["/path/to/train/image1.png", ...]
val_paths = ["/path/to/val/image1.png", ...]
train_dl = make_dataloaders(paths=train_paths, split='train', batch_size=16)
val_dl = make_dataloaders(paths=val_paths, split='val', batch_size=16)
model = MainModel()
train_model(model, train_dl, val_dl, epochs=10)
```

### Inference

See `example_usage.py` for a template. Inference logic will depend on your preprocessing and model checkpoint.

## Files
- `model.py`: Model architectures and utilities
- `dataloader.py`: Dataset and dataloader utilities
- `train.py`: Training loop
- `main.py`: CLI entry point
- `example_usage.py`: Example usage for training and inference 