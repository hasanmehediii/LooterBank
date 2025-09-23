import 'package:flutter/material.dart';

class CookiePolicyScreen extends StatelessWidget {
  const CookiePolicyScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Cookie Policy"),
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
          SingleChildScrollView(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  "Cookie Policy",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 20),
                _buildSection(
                  "What are cookies?",
                  "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
                ),
                _buildSection(
                  "How we use cookies",
                  "We use cookies to understand how you use our services, to improve your experience, and to personalize content and advertising. For example, we use cookies to:",
                  [
                    "Remember your login details.",
                    "Understand how you use our website.",
                    "Show you relevant advertising.",
                  ],
                ),
                _buildSection(
                  "Your choices",
                  "You have the right to choose whether or not to accept cookies. You can exercise your cookie preferences by visiting our cookie settings page.",
                  [],
                  [
                    _buildLink("Cookie Settings", "/cookie-settings"),
                    _buildLink("Learn more about cookies", "https://www.allaboutcookies.org/"),
                  ]
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSection(String title, String content, [List<String>? bulletPoints, List<Widget>? links]) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Colors.white,
            fontSize: 22,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          content,
          style: const TextStyle(color: Colors.white70, fontSize: 16),
        ),
        if (bulletPoints != null)
          ...bulletPoints.map((point) => Padding(
            padding: const EdgeInsets.only(left: 16.0, top: 8.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text("• ", style: TextStyle(color: Colors.white70, fontSize: 16)),
                Expanded(child: Text(point, style: const TextStyle(color: Colors.white70, fontSize: 16))),
              ],
            ),
          )),
        if (links != null)
          ...links,
        const SizedBox(height: 20),
      ],
    );
  }

  Widget _buildLink(String text, String url) {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: InkWell(
        onTap: () {
          // In a real app, you'd use a package like url_launcher to open the URL.
          // For now, we'll just print it.
          print("Navigate to $url");
        },
        child: Text(
          text,
          style: const TextStyle(
            color: Colors.lightBlue,
            decoration: TextDecoration.underline,
            fontSize: 16,
          ),
        ),
      ),
    );
  }
}
