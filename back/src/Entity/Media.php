<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\MediaRepository;
use ApiPlatform\Metadata\ApiResource;
use App\ApiResource\Media\MediaUpdateApiResource;
use App\ApiResource\Media\MediaUploadApiResource;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: MediaRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:media']],
    operations: [
        new MediaUploadApiResource(),
        new MediaUpdateApiResource(),
    ]
)]
class Media
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:media', 'read:user:media', 'read:profile:media'])]
    private ?int $id = null;

    #[Vich\UploadableField(mapping: "media", fileNameProperty: "path")]
    #[Assert\NotNull]
    public ?File $file = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['read:media', 'read:user:media', 'read:profile:media'])]
    private ?string $path = null;

    #[ORM\Column(length: 255, nullable: false)]
    #[Groups(['read:media', 'read:user:media', 'create:media', 'read:profile:media', 'update:media'])]
    private ?string $slugMedia = null;

    #[ORM\Column(length: 255, nullable: false)]
    #[Groups(['read:media', 'read:user:media', 'create:media', 'read:profile:media', 'update:media'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: false)]
    #[Groups(['read:media', 'read:user:media', 'read:profile:media'])]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: false)]
    #[Groups(['read:media', 'read:user:media', 'read:profile:media'])]
    private ?\DateTimeInterface $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function getFile()
    {
        return $this->file;
    }

    public function setFile($file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(?string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getSlugMedia(): ?string
    {
        return $this->slugMedia;
    }

    public function setSlugMedia(string $slugMedia): self
    {
        $this->slugMedia = $slugMedia;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
