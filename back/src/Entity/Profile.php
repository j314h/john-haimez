<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProfileRepository;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use App\ApiResource\Profile\ProfileMediaDeleteApiResource;
use App\ApiResource\Profile\ProfileMediaUploadApiResource;


#[ORM\Entity(repositoryClass: ProfileRepository::class)]
#[ApiResource(
    mercure: [
        'topics' => ['/profile'],
    ],
    normalizationContext: ['groups' => ['read:profile', 'read:profile:media']],
    operations: [
        // only media profile
        new ProfileMediaUploadApiResource(),
        new ProfileMediaDeleteApiResource(),

        // only profile data
        new Get(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
        new GetCollection(),
        new Post(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            validationContext: ['groups' => ['create:profile']],
        ),
        new Delete(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
        ),
        new Put(
            securityPostDenormalize: "is_granted('ROLE_ROOT')",
            validationContext: ['groups' => ['put:profile']],
        ),
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
    #[Groups(['read:profile', 'put:profile', 'create:profile'])]
    #[Assert\NotBlank()]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:profile', 'put:profile', 'create:profile'])]
    #[Assert\NotBlank()]
    private ?string $subTitle = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:profile', 'put:profile', 'create:profile'])]
    #[Assert\NotBlank()]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:profile', 'put:profile', 'create:profile'])]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:profile', 'put:profile', 'create:profile'])]
    private ?string $tel = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'],)]
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
