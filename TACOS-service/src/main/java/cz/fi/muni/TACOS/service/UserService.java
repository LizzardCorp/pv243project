package cz.fi.muni.TACOS.service;

import cz.fi.muni.TACOS.persistence.entity.Order;
import cz.fi.muni.TACOS.persistence.entity.User;
import cz.fi.muni.TACOS.persistence.enums.UserRole;

import java.util.List;

/**
 * Service interface for managing User entities
 *
 * @author Pavel Vyskocil <vyskocilpavel@muni.cz>
 */
public interface UserService extends Service<User>{

    /**
     * Finds User entity by given email
     *
     * @param email email to be used for search
     * @return User with given email or null
     */
    User findByEmail(String email);

    /**
     * Find all Users with given role
     *
     * @param role  UserRole to be used for search
     * @return List of users with given role
     */
    List<User> getAllForRole(UserRole role);

    /**
     * Add order to user's list of submitted orders
     *
     * @param user User
     * @param order Order
     */
    void addOrderAsSubmittedOrder(User user, Order order);

    /**
     * Remove order from user's list of submitted orders
     * @param user User
     * @param order Order
     */
    void removeOrderFromSubmittedOrders(User user, Order order);

}
