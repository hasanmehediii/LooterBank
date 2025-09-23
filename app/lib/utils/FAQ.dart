import 'package:flutter/material.dart';

class FAQScreen extends StatelessWidget {
  const FAQScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("FAQ"),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/money.jpg"),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Container(
            color: Colors.black.withOpacity(0.7),
          ),
          ListView(
            padding: const EdgeInsets.all(24.0),
            children: const [
              Text(
                "Frequently Asked Questions",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 20),
              ExpansionTile(
                title: Text("What is LooterBank?", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                children: [
                  Padding(
                    padding: EdgeInsets.all(16.0),
                    child: Text(
                      "LooterBank is a revolutionary banking platform that allows you to experience the thrill of losing your money.",
                      style: TextStyle(color: Colors.white70, fontSize: 16),
                    ),
                  ),
                ],
              ),
              ExpansionTile(
                title: Text("Is my money safe?", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                children: [
                  Padding(
                    padding: EdgeInsets.all(16.0),
                    child: Text(
                      "Absolutely not. We take pride in our lack of security measures.",
                      style: TextStyle(color: Colors.white70, fontSize: 16),
                    ),
                  ),
                ],
              ),
              ExpansionTile(
                title: Text("How can I contact support?", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                children: [
                  Padding(
                    padding: EdgeInsets.all(16.0),
                    child: Text(
                      "You can't. Our support team is non-existent.",
                      style: TextStyle(color: Colors.white70, fontSize: 16),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
