<?php

namespace App\Controller\User;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;

class MeUpdateController extends AbstractController
{
    public function __construct(
        private Security $security,
        private UserRepository $userRepository
    ) {
    }

    /**
     * update user current, no update email and password
     *
     * @param Request $req
     * @return void
     */
    public function __invoke(Request $req)
    {
        // recover entity user current with email
        $emailUserCurrent = $this->security->getUser()->getUserIdentifier();
        $userCurrent = $this->userRepository->findOneByEmail($emailUserCurrent);

        // update infos
        $userCurrent->setFirstName($req->toArray()['firstName'] ?? $userCurrent->getFirstName());
        $userCurrent->setLastName($req->toArray()['lastName'] ?? $userCurrent->getLastName());
        $userCurrent->setRoles($req->toArray()['roles'] ?? $userCurrent->getRoles());
        $userCurrent->setAvatar($req->toArray()['avatar'] ?? $userCurrent->getAvatar());

        // recover data in request and update name if firstName and lastName exist
        $userCurrent = $this->userRepository->updatedNameWithFirstNameAndLastName($userCurrent, $req);

        // updated date update
        $userCurrent->setUpdatedAt(new \DateTime);

        return $userCurrent;
    }
}
