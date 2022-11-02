<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProfileRepository;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\HttpOperation;
use App\ApiResource\Profile\ProfileMediaUploadApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:profile', 'read:profile:media']],
    operations: [
        new GetCollection(),
        new ProfileMediaUploadApiResource(),
    ]
)]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:profile'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:profile'])]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:profile'])]
    private ?string $subTitle = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:profile'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:profile'])]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:profile'])]
    private ?string $tel = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[Groups(['read:profile'])]
    private ?Media $media = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSubTitle(): ?string
    {
        return $this->subTitle;
    }

    public function setSubTitle(string $subTitle): self
    {
        $this->subTitle = $subTitle;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getMedia(): ?Media
    {
        return $this->media;
    }

    public function setMedia(?Media $media): self
    {
        $this->media = $media;

        return $this;
    }
}
