use std::io;
use std::io::Write;

fn main() {
    let mut a = String::new();
    let mut b = String::new();

    print!("Enter the first number: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut a).unwrap();
    let a: f32 = a.trim().parse().unwrap();

    print!("Enter the second number: ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut b).unwrap();
    let b: f32 = b.trim().parse().unwrap();

    println!("{}+{}={}", a, b, a + b);
    println!("{}-{}={}", a, b, a - b);
    println!("{}*{}={}", a, b, a * b);
    println!("{}/{}={}", a, b, a / b);
}
