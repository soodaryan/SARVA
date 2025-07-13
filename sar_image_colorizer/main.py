import argparse
from .model import MainModel
from .dataloader import make_dataloaders
from .train import train_model


def main():
    parser = argparse.ArgumentParser(description='SAR Image Colorizer')
    parser.add_argument('--mode', type=str, default='train', choices=['train', 'infer'], help='Mode: train or infer')
    parser.add_argument('--train_paths', type=str, nargs='+', help='Paths to training images')
    parser.add_argument('--val_paths', type=str, nargs='+', help='Paths to validation images')
    parser.add_argument('--epochs', type=int, default=10, help='Number of epochs')
    parser.add_argument('--batch_size', type=int, default=16, help='Batch size')
    args = parser.parse_args()

    if args.mode == 'train':
        train_dl = make_dataloaders(paths=args.train_paths, split='train', batch_size=args.batch_size)
        val_dl = make_dataloaders(paths=args.val_paths, split='val', batch_size=args.batch_size) if args.val_paths else None
        model = MainModel()
        train_model(model, train_dl, val_dl, epochs=args.epochs)
    elif args.mode == 'infer':
        print('Inference mode is not yet implemented.')

if __name__ == '__main__':
    main() 