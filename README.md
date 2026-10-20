# GradeMyJob

Official landing repository for **GradeMyJob** — a cross-browser extension that parses job postings in real time, deconstructs technical stacks, isolates hard versus preferred qualifications, and calculates candidate-role alignment.

Website: [https://AltayAtaman.github.io/GradeMyJob/](https://AltayAtaman.github.io/GradeMyJob/)

---

## English Overview

### Description
GradeMyJob is a cross-browser extension (Chrome MV3 and Firefox MV2) built to automate job posting triage across LinkedIn, Indeed, and We Work Remotely. Developed with React 18, TypeScript, and WXT, it parses unstructured job listings directly in the browser, separates non-negotiable technical prerequisites from preferred qualifications, and calculates an objective alignment score against a user-defined candidate profile. The architecture uses a multi-tier LLM cascade via Google Gemini and OpenAI backed by an AWS Lambda service with DynamoDB caching to ensure low latency and reduced token consumption.

### Technical Highlights
* **In-Browser DOM Extraction:** Employs dynamic scrapers on LinkedIn, Indeed, and WWR to extract structured data from live job listings without third-party scraping APIs.
* **Requirements & Signal Analysis:** Distinguishes core technical prerequisites from nice-to-haves and surfaces potential job-post red and green flags.
* **Resilient AI Pipeline:** Implements multi-model fallback cascades (Google Gemini and OpenAI) alongside private API key support (BYOK) and on-device Web AI.
* **Serverless Edge Caching:** Backed by AWS Lambda and DynamoDB with TTL-based request caching to eliminate redundant LLM invocations and maintain sub-second response times.

---

## Türkçe Açıklama

### Genel Bakış
GradeMyJob, LinkedIn, Indeed ve We Work Remotely üzerindeki iş ilanlarını tarayıcı üzerinde gerçek zamanlı analiz eden bir eklentidir (Chrome MV3 ve Firefox MV2). React 18, TypeScript ve WXT altyapısıyla geliştirilen sistem; ilan metinlerini yapılandırılmış verilere dönüştürür, zorunlu teknik gereksinimleri tercih edilenlerden ayrıştırır ve adayın profiline göre objektif bir uyum skoru hesaplar. Arka planda Google Gemini ve OpenAI modellerini otomatik hata toleranslı (fallback) bir hiyerarşiyle çalıştıran sistem, AWS Lambda ve DynamoDB önbelleklemesi sayesinde token tüketimini ve gecikmeyi minimumda tutar.

### Teknik Özellikler
* **Gerçek Zamanlı DOM Analizi:** LinkedIn, Indeed ve WWR platformlarında sayfa içeriğini dinamik olarak tarayarak ilan parametrelerini doğrudan tarayıcı bağlamında çıkarır.
* **Gereksinim ve Sinyal Tespiti:** İlandaki şartları filtreler; kritik gereksinimleri ayıklar, çalışma şartlarına dair olumlu ve olumsuz sinyalleri (red/green flags) listeler.
* **Katmanlı LLM Altyapısı:** Google Gemini ve OpenAI modelleri arasında otomatik geçiş mekanizması, yerel model desteği ve kullanıcıya özel API anahtarı (BYOK) kullanımı sunar.
* **Sunucusuz Veri Önbellekleme:** AWS Lambda ve TTL tabanlı DynamoDB mimarisi ile mükerrer istekleri önleyerek analiz sonuçlarını milisaniyeler içinde getirir.

---

## Technical Stack

* **Framework:** React 18 & TypeScript
* **Extension Compiler:** WXT Framework (Manifest V3 & V2 targets)
* **Styling:** Tailwind CSS & Lucide React
* **Inference Pipeline:** Google Gemini, OpenAI, Browser Web AI
* **Cloud Infrastructure:** AWS Lambda & Amazon DynamoDB
* **Hosting:** GitHub Pages (Automated via GitHub Actions)

---

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
