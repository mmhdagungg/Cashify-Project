-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataKeuangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_profile` INTEGER NOT NULL,
    `labaKotor` INTEGER NOT NULL,
    `bayarGaji` INTEGER NULL DEFAULT 0,
    `bayarAir` INTEGER NULL DEFAULT 0,
    `biayaListrik` INTEGER NULL DEFAULT 0,
    `biayaTransport` INTEGER NULL DEFAULT 0,
    `biayaPromosi` INTEGER NULL DEFAULT 0,
    `biayaPackaging` INTEGER NULL DEFAULT 0,
    `biayaPajak` INTEGER NULL DEFAULT 0,
    `dateAdded` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DataKeuangan` ADD CONSTRAINT `DataKeuangan_id_profile_fkey` FOREIGN KEY (`id_profile`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
