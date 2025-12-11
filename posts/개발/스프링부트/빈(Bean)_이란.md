---
tags:
  - 빈
  - Bean
references:
created_date: 2025-08-11T22:42:49.000Z
last_modified_date: 2025-08-11T22:43:18.000Z
---
# 빈(Bean)의 정의  
  
빈이란, 스프링의 **어플리케이션 컨텍스트(Application Context)**가 생성하고 등록해서 관리하는 객체를 의미합니다. 즉, 개발자가 직접 객체를 생성하는 대신, 스프링이 객체의 생성과 생명주기 관리를 담당합니다. 이렇게 생성된 객체들은 어플리케이션 컨텍스트에 등록되어 필요할 때마다 사용할 수 있습니다.  
  
## 왜 빈을 사용할까?  
  
스프링에서 빈을 사용하는 가장 큰 이유는 객체 관리와 의존성 설정의 편리함입니다. 스프링 컨테이너가 객체를 대신 생성하고 관리해주기 때문에, 개발자는 복잡한 객체 생성 과정이나 의존성 연결에 신경 쓰지 않아도 됩니다. 이를 통해 코드의 결합도를 낮추고, 유지보수성과 테스트 용이성을 높일 수 있습니다.  
  
## 빈 등록 방법  
  
스프링에서는 여러 가지 방법으로 빈을 등록할 수 있습니다. 대표적으로는 ‎`@Component`, ‎`@Service`, ‎`@Repository`와 같은 어노테이션을 클래스에 붙여 빈으로 등록하거나, 설정 파일을 통해 직접 등록할 수도 있습니다. 그러면 MyBean 이라는 객체를 여러 방법을 사용하여 빈으로 등록해보는 예제 코드를 작성해보겠습니다.

- 예제 클래스
	```java
	public class MyBean {  
		public String greet() {  
			return "Hello from MyBean!";  
		}  
	}
	```


### `@Bean` 사용

- `@Bean` 어노테이션을 사용한 예제
	```java
	@Configuration
	public class MyConfig {
	
		@Bean
		public MyBean myBean() {
			return new MyBean();
		}
	}
	```

`@Bean`  어노테이션을 사용할 때는 반드시 `@Configuration` 으로 등록한 클래스 안에서만 등록 가능합니다. `@Configuration` 어노테이션을 사용한 클래스는 스프링 차원에서 특별하게 처리됩니다. `@Configuration` 어노테이션 은 설정 클래스로서 해당 클래스 내부의 `@Bean` 을 호출해 빈 객체를 생성하고 어플리케이션 컨텍스트에 등록하는 기능을 수행합니다.

### `@Component` 사용

- `@Component` 어노테이션을 사용한 예제
	```java
	@Component // 클래스 위에 @Component 추가
	public class MyBean {  
		public String greet() {  
			return "Hello from MyBean!";  
		}  
	}
	```

내부적으로  `@Repository`, `@Service`, `@Configuration`, `@Controller`, `@RestController`  어노테이션 모두 `@Component` 어노테이션을 사용하기 때문에 각 어노테이션들 모두 `@Component` 어노테이션과 동일한 방식으로 빈으로 등록할 수 있습니다.


## 빈 등록 시 주의 사항

### `@ComponentScan`

특정 클래스를 빈으로 등록하기 위해서는 `@ComponentScan` 
