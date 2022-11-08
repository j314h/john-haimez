<?php

namespace App\Entity;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Post;
use Doctrine\DBAL\Types\Types;
use ApiPlatform\Metadata\Delete;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\CompetenceRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\ApiResource\Competence\CompetenceMediaCreateApiResource;
use App\ApiResource\Competence\CompetenceMediaUpdateApiResource;

#[ORM\Entity(repositoryClass: CompetenceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:competence', 'read:competence:media']],
    operations: [
        // only media for competence
        new CompetenceMediaCreateApiResource(),
        new CompetenceMediaUpdateApiResource(),

        // only competence data
        new GetCollection(),
        new Get(),
        new Post(),
        new Put(),
        new Delete(),
    ]
)]
class Competence
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:competence'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:competence'])]
    #[Assert\NotBlank()]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:competence'])]
    #[Assert\NotBlank()]
    private ?string $description = null;

    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: Media::class)]
    #[Groups(['read:competence'])]
    private Collection $media;

    public function __construct()
    {
        $this->media = new ArrayCollection();
    }

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Media>
     */
    public function getMedia(): Collection
    {
        return $this->media;
    }

    public function addMedium(Media $medium): self
    {
        if (!$this->media->contains($medium)) {
            $this->media->add($medium);
            $medium->setCompetence($this);
        }

        return $this;
    }

    public function removeMedium(Media $medium): self
    {
        if ($this->media->removeElement($medium)) {
            // set the owning side to null (unless already changed)
            if ($medium->getCompetence() === $this) {
                $medium->setCompetence(null);
            }
        }

        return $this;
    }
}
