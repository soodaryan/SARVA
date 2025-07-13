import torch
from tqdm import tqdm
from .model import MainModel

def train_model(model, train_dl, val_dl=None, epochs=1, display_every=200):
    def create_loss_meters():
        class AverageMeter:
            def __init__(self):
                self.reset()
            def reset(self):
                self.count, self.avg, self.sum = [0.] * 3
            def update(self, val, count=1):
                self.count += count
                self.sum += count * val
                self.avg = self.sum / self.count
        loss_D_fake = AverageMeter()
        loss_D_real = AverageMeter()
        loss_D = AverageMeter()
        loss_G_GAN = AverageMeter()
        loss_G_L1 = AverageMeter()
        loss_G = AverageMeter()
        return {'loss_D_fake': loss_D_fake,
                'loss_D_real': loss_D_real,
                'loss_D': loss_D,
                'loss_G_GAN': loss_G_GAN,
                'loss_G_L1': loss_G_L1,
                'loss_G': loss_G}
    def update_losses(model, loss_meter_dict, count):
        for loss_name, loss_meter in loss_meter_dict.items():
            loss = getattr(model, loss_name)
            loss_meter.update(loss.item(), count=count)
    for e in range(epochs):
        loss_meter_dict = create_loss_meters()
        i = 0
        for data in tqdm(train_dl):
            model.setup_input(data)
            model.optimize()
            update_losses(model, loss_meter_dict, count=data['L'].size(0))
            i += 1
            if i % display_every == 0:
                print(f"\nEpoch {e+1}/{epochs}")
                print(f"Iteration {i}/{len(train_dl)}")
                for loss_name, loss_meter in loss_meter_dict.items():
                    print(f"{loss_name}: {loss_meter.avg:.5f}") 