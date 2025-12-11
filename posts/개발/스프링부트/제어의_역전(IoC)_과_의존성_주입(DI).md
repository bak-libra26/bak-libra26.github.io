---
tags:
  - DI
  - IoC
references: 
created_date: 2025-08-11T22:42:49.000Z
last_modified_date: 2025-08-11T22:43:18.000Z
id: 332c215a-89f0-44f4-9149-5f778d6255bb
---
# 제어의 역전(IoC)과 의존성 주입(DI)

스프링부트(Spring Boot)를 사용할 때 반드시 이해해야 하는 핵심 개념 중 하나가 바로 **제어의 역전(IoC)**과 **의존성 주입(DI)**입니다.

## 제어의 역전(IoC: Inversion of Control)

IoC란 객체의 생성과 생명주기 관리의 주도권을 개발자가 아닌 프레임워크(스프링)에게 넘기는 것을 의미합니다. 기존에는 개발자가 직접 객체를 생성하고 관리했지만, IoC를 적용하면 스프링 컨테이너가 객체를 대신 생성하고 관리합니다. 이를 통해 코드의 결합도를 낮추고, 더 유연하고 확장성 있는 구조를 만들 수 있습니다.

- 기존 객체 생성 방식 예시:
    
    ```java
    public class A {
        private B b;
    
        public A(B b) {
            this.b = b;
        }
    }
    
    public class B {}
    
    public class Main {
        public static void main(String[] args) {
            B b = new B();
            A a = new A(b);
        }
    }
    ```
    

## 의존성 주입(DI: Dependency Injection)

DI는 IoC의 대표적인 구현 방법입니다. 객체가 필요로 하는 의존성(다른 객체)을 직접 생성하지 않고, 외부(스프링 컨테이너)에서 주입받는 방식을 말합니다. 이렇게 하면 객체 간의 관계를 코드 내부가 아니라 설정이나 어노테이션을 통해 정의할 수 있습니다. DI를 적용하면 테스트가 쉬워지고, 코드의 재사용성과 유지보수성이 크게 향상됩니다.

- 의존성 주입 예시:
    
    ```java
    // 의존성 주입이 없는 경우
    public class UserService {
        private UserRepository userRepository = new UserRepository();
    }
    
    // 의존성 주입이 적용된 경우
    public class UserService {
        private final UserRepository userRepository;
    
        // 생성자 주입 방식
        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }
    }
    ```
    

스프링에서는 `@Autowired`, `@Component`, `@Service`와 같은 어노테이션을 활용해 DI를 손쉽게 적용할 수 있습니다.
