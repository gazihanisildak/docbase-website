import type { Metadata } from "next";
import { getDictionary, Locale, locales } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  return {
    title: `${dict.privacy.title} - Docbase`,
    description: dict.metadata.description,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  if (validLocale === "de") {
    return <PrivacyDE lastUpdated={dict.privacy.lastUpdated} />;
  }

  return <PrivacyEN lastUpdated={dict.privacy.lastUpdated} />;
}

function PrivacyEN({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted mb-8">{lastUpdated}</p>

      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          We appreciate your interest in our app Docbase. Protecting your
          personal data is important to us. In this privacy policy, we inform
          you about the processing of your personal data when using our app.
        </p>

        <h2>2. Data Controller</h2>
        <p>The data controller is:</p>
        <p>
          Gazihan Isildak
          <br />
          Germany
          <br />
          Email: info@gzhn.online
        </p>

        <h2>3. Principle: Privacy by Design</h2>
        <p>
          Docbase was built from the ground up with the &quot;Privacy by
          Design&quot; principle. This means:
        </p>
        <ul>
          <li>
            <strong>On-Device OCR:</strong> Text recognition is performed
            exclusively locally on your device. Your documents are never
            transmitted to our servers.
          </li>
          <li>
            <strong>No Server Access to Documents:</strong> We never have access
            to your scanned documents or their contents.
          </li>
          <li>
            <strong>Your Google Drive:</strong> Documents are stored in your
            personal Google Drive, not on our servers.
          </li>
          <li>
            <strong>Limited Permissions:</strong> We use the drive.file scope,
            which only gives us access to files created by the app itself.
          </li>
        </ul>

        <h2>4. What Data Is Processed?</h2>

        <h3>4.1 Account Data</h3>
        <p>During registration, we store:</p>
        <ul>
          <li>Email address</li>
          <li>Display name (optional)</li>
          <li>Profile picture URL (for Google/Apple Sign-In)</li>
          <li>Registration date</li>
          <li>Subscription status</li>
        </ul>

        <h3>4.2 Document Metadata</h3>
        <p>For each document, we store the following metadata:</p>
        <ul>
          <li>Document title</li>
          <li>Category</li>
          <li>Tags</li>
          <li>Creation and modification date</li>
          <li>Reference to the file in Google Drive</li>
        </ul>

        <h3>4.3 Usage Data</h3>
        <p>
          We collect anonymized usage data to improve the app, including:
        </p>
        <ul>
          <li>App version</li>
          <li>Device type and operating system version</li>
          <li>Usage statistics (anonymized)</li>
        </ul>

        <h2>5. Legal Basis</h2>
        <p>Your data is processed based on the following legal grounds:</p>
        <ul>
          <li>
            <strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> For
            providing app functionality
          </li>
          <li>
            <strong>Legitimate Interests (Art. 6(1)(f) GDPR):</strong> For app
            improvement and bug fixing
          </li>
          <li>
            <strong>Consent (Art. 6(1)(a) GDPR):</strong> For optional features
            and marketing
          </li>
        </ul>

        <h2>6. Third-Party Services</h2>

        <h3>6.1 Google Firebase</h3>
        <p>
          We use Google Firebase for authentication and metadata storage. For
          more information, see the{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Privacy Policy
          </a>
          .
        </p>

        <h3>6.2 Google Drive</h3>
        <p>
          Documents are stored in your personal Google Drive. Usage is subject
          to the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
          .
        </p>

        <h3>6.3 RevenueCat</h3>
        <p>
          We use RevenueCat for subscription management. Details can be found in
          the{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat Privacy Policy
          </a>
          .
        </p>

        <h2>7. Your Rights</h2>
        <p>You have the following rights:</p>
        <ul>
          <li>
            <strong>Right of Access (Art. 15 GDPR):</strong> You can request
            information about your stored data.
          </li>
          <li>
            <strong>Right to Rectification (Art. 16 GDPR):</strong> You can
            request correction of inaccurate data.
          </li>
          <li>
            <strong>Right to Erasure (Art. 17 GDPR):</strong> You can request
            deletion of your data.
          </li>
          <li>
            <strong>Right to Data Portability (Art. 20 GDPR):</strong> You can
            receive your data in a structured format.
          </li>
          <li>
            <strong>Right to Object (Art. 21 GDPR):</strong> You can object to
            the processing.
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> You can file a
            complaint with a data protection authority.
          </li>
        </ul>

        <h2>8. Data Export</h2>
        <p>
          You can request a complete export of your data at any time. This
          feature is available in the app under Settings.
        </p>

        <h2>9. Data Deletion</h2>
        <p>
          When you delete your account, all personal data is permanently
          deleted. Documents in Google Drive remain in your Google account and
          must be deleted separately.
        </p>

        <h2>10. Data Security</h2>
        <p>We implement technical and organizational measures:</p>
        <ul>
          <li>Encrypted data transmission (TLS/SSL)</li>
          <li>Secure authentication via Google/Apple</li>
          <li>Regular security audits</li>
        </ul>

        <h2>11. Changes</h2>
        <p>
          We reserve the right to update this privacy policy as needed. The
          current version is always available in the app and on our website.
        </p>

        <h2>12. Contact</h2>
        <p>For privacy questions, please contact us at:</p>
        <p>Email: info@gzhn.online</p>
      </div>
    </div>
  );
}

function PrivacyDE({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <p className="text-muted mb-8">{lastUpdated}</p>

      <div className="legal-content">
        <h2>1. Einleitung</h2>
        <p>
          Wir freuen uns über Ihr Interesse an unserer App Docbase. Der Schutz
          Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. In
          dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung
          Ihrer personenbezogenen Daten bei der Nutzung unserer App.
        </p>

        <h2>2. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung ist:</p>
        <p>
          Gazihan Isildak
          <br />
          Deutschland
          <br />
          E-Mail: info@gzhn.online
        </p>

        <h2>3. Grundsatz: Datenschutz durch Design</h2>
        <p>
          Docbase wurde von Grund auf mit dem Prinzip &quot;Privacy by
          Design&quot; entwickelt. Das bedeutet:
        </p>
        <ul>
          <li>
            <strong>On-Device OCR:</strong> Die Texterkennung erfolgt
            ausschließlich lokal auf Ihrem Gerät. Ihre Dokumente werden niemals
            an unsere Server übertragen.
          </li>
          <li>
            <strong>Kein Server-Zugriff auf Dokumente:</strong> Wir haben zu
            keinem Zeitpunkt Zugriff auf Ihre gescannten Dokumente oder deren
            Inhalte.
          </li>
          <li>
            <strong>Ihr Google Drive:</strong> Dokumente werden in Ihrem
            persönlichen Google Drive gespeichert, nicht auf unseren Servern.
          </li>
          <li>
            <strong>Eingeschränkte Berechtigungen:</strong> Wir nutzen den
            drive.file Scope, der uns ausschließlich Zugriff auf Dateien gibt,
            die von der App selbst erstellt wurden.
          </li>
        </ul>

        <h2>4. Welche Daten werden verarbeitet?</h2>

        <h3>4.1 Kontodaten</h3>
        <p>Bei der Registrierung speichern wir:</p>
        <ul>
          <li>E-Mail-Adresse</li>
          <li>Anzeigename (optional)</li>
          <li>Profilbild-URL (bei Google/Apple Sign-In)</li>
          <li>Registrierungsdatum</li>
          <li>Abonnement-Status</li>
        </ul>

        <h3>4.2 Dokument-Metadaten</h3>
        <p>Für jedes Dokument speichern wir folgende Metadaten:</p>
        <ul>
          <li>Dokumententitel</li>
          <li>Kategorie</li>
          <li>Tags</li>
          <li>Erstellungs- und Änderungsdatum</li>
          <li>Referenz zur Datei in Google Drive</li>
        </ul>

        <h3>4.3 Nutzungsdaten</h3>
        <p>
          Wir erheben anonymisierte Nutzungsdaten zur Verbesserung der App,
          einschließlich:
        </p>
        <ul>
          <li>App-Version</li>
          <li>Gerätetyp und Betriebssystemversion</li>
          <li>Nutzungsstatistiken (anonymisiert)</li>
        </ul>

        <h2>5. Rechtsgrundlagen</h2>
        <p>Die Verarbeitung Ihrer Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
        <ul>
          <li>
            <strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</strong> Für
            die Bereitstellung der App-Funktionen
          </li>
          <li>
            <strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong>{" "}
            Für die Verbesserung der App und Fehlerbehebung
          </li>
          <li>
            <strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Für
            optionale Funktionen und Marketing
          </li>
        </ul>

        <h2>6. Drittanbieter-Dienste</h2>

        <h3>6.1 Google Firebase</h3>
        <p>
          Wir nutzen Google Firebase für Authentifizierung und
          Metadaten-Speicherung. Weitere Informationen finden Sie in der{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase-Datenschutzerklärung
          </a>
          .
        </p>

        <h3>6.2 Google Drive</h3>
        <p>
          Dokumente werden in Ihrem persönlichen Google Drive gespeichert. Die
          Nutzung unterliegt den{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google-Datenschutzbestimmungen
          </a>
          .
        </p>

        <h3>6.3 RevenueCat</h3>
        <p>
          Für die Verwaltung von Abonnements nutzen wir RevenueCat. Details
          finden Sie in der{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat-Datenschutzerklärung
          </a>
          .
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>
            <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft
            über Ihre gespeicherten Daten verlangen.
          </li>
          <li>
            <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die
            Berichtigung unrichtiger Daten verlangen.
          </li>
          <li>
            <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die
            Löschung Ihrer Daten verlangen.
          </li>
          <li>
            <strong>Datenportabilität (Art. 20 DSGVO):</strong> Sie können Ihre
            Daten in einem strukturierten Format erhalten.
          </li>
          <li>
            <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der
            Verarbeitung widersprechen.
          </li>
          <li>
            <strong>Beschwerderecht:</strong> Sie können sich bei einer
            Datenschutzaufsichtsbehörde beschweren.
          </li>
        </ul>

        <h2>8. Datenexport</h2>
        <p>
          Sie können jederzeit einen vollständigen Export Ihrer Daten anfordern.
          Diese Funktion ist in der App unter Einstellungen verfügbar.
        </p>

        <h2>9. Datenlöschung</h2>
        <p>
          Bei Löschung Ihres Kontos werden alle personenbezogenen Daten
          unwiderruflich gelöscht. Dokumente in Google Drive verbleiben in Ihrem
          Google-Konto und müssen separat gelöscht werden.
        </p>

        <h2>10. Datensicherheit</h2>
        <p>Wir setzen technische und organisatorische Maßnahmen ein:</p>
        <ul>
          <li>Verschlüsselte Datenübertragung (TLS/SSL)</li>
          <li>Sichere Authentifizierung über Google/Apple</li>
          <li>Regelmäßige Sicherheitsüberprüfungen</li>
        </ul>

        <h2>11. Änderungen</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
          aktualisieren. Die aktuelle Version ist stets in der App und auf
          unserer Website verfügbar.
        </p>

        <h2>12. Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz können Sie uns unter folgender Adresse
          erreichen:
        </p>
        <p>E-Mail: info@gzhn.online</p>
      </div>
    </div>
  );
}
