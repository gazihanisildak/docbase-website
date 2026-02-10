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
    title: `${dict.terms.title} - Docbase`,
    description: dict.metadata.description,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const dict = await getDictionary(validLocale);

  if (validLocale === "de") {
    return <TermsDE lastUpdated={dict.terms.lastUpdated} />;
  }

  return <TermsEN lastUpdated={dict.terms.lastUpdated} />;
}

function TermsEN({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-muted mb-8">{lastUpdated}</p>

      <div className="legal-content">
        <h2>1. Scope</h2>
        <p>
          These Terms of Service apply to the use of the mobile application
          &quot;Docbase&quot; (hereinafter &quot;App&quot;), provided by Gazihan
          Isildak (hereinafter &quot;Provider&quot;).
        </p>

        <h2>2. Subject Matter</h2>
        <p>
          The App enables users to digitize, organize, and store documents. The
          App offers:
        </p>
        <ul>
          <li>Document scanning with automatic edge detection</li>
          <li>On-device OCR (text recognition)</li>
          <li>Categorization and tagging</li>
          <li>Document search</li>
          <li>Cloud backup via Google Drive (Premium)</li>
        </ul>

        <h2>3. Registration and User Account</h2>
        <h3>3.1 Requirements</h3>
        <p>
          Registration is required to use the App. Registration is only
          permitted for persons who have reached the age of 16.
        </p>

        <h3>3.2 Account Security</h3>
        <p>
          The user is responsible for the security of their login credentials.
          The Provider must be informed immediately if misuse is suspected.
        </p>

        <h2>4. Scope of Services</h2>
        <h3>4.1 Free Version</h3>
        <p>The free version includes:</p>
        <ul>
          <li>Storage of up to 10 documents</li>
          <li>On-device OCR</li>
          <li>Basic categorization</li>
          <li>Local storage</li>
        </ul>

        <h3>4.2 Premium Version</h3>
        <p>The Premium version additionally offers:</p>
        <ul>
          <li>Unlimited documents</li>
          <li>Google Drive backup</li>
          <li>AI-powered search</li>
          <li>Priority support</li>
          <li>All future premium features</li>
        </ul>

        <h2>5. User Obligations</h2>
        <p>The user agrees to:</p>
        <ul>
          <li>Use the App only for legal purposes</li>
          <li>Not store illegal content</li>
          <li>Respect the rights of third parties</li>
          <li>Not manipulate the App</li>
        </ul>

        <h2>6. Liability</h2>
        <h3>6.1 Limitation of Liability</h3>
        <p>
          The Provider is fully liable for intent or gross negligence and for
          injury to life, body, or health.
        </p>

        <h3>6.2 Data Loss</h3>
        <p>
          The Provider is not liable for data loss caused by the user or third
          parties. Users are advised to create regular backups of their data.
        </p>

        <h2>7. Availability</h2>
        <p>
          The Provider strives for high availability of the App but cannot
          guarantee uninterrupted availability. Maintenance and technical issues
          may lead to temporary restrictions.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          The Provider reserves the right to change these Terms. Significant
          changes will be communicated to users in advance. Continued use after
          changes take effect constitutes acceptance.
        </p>

        <h2>9. Termination</h2>
        <h3>9.1 Termination by User</h3>
        <p>
          The user can delete their account at any time in the App settings.
          Subscriptions must be canceled separately through the App Store.
        </p>

        <h3>9.2 Termination by Provider</h3>
        <p>
          The Provider may terminate the agreement immediately in case of
          serious violations of these Terms.
        </p>

        <h2>10. Final Provisions</h2>
        <h3>10.1 Applicable Law</h3>
        <p>German law applies, excluding the UN Convention on Contracts.</p>

        <h3>10.2 Jurisdiction</h3>
        <p>
          The place of jurisdiction for all disputes is, to the extent legally
          permissible, the Provider&apos;s place of business.
        </p>

        <h3>10.3 Severability</h3>
        <p>
          If individual provisions of these Terms are invalid, the validity of
          the remaining provisions remains unaffected.
        </p>

        <h2>11. Contact</h2>
        <p>For questions about these Terms, please contact:</p>
        <p>Email: info@gzhn.online</p>
      </div>
    </div>
  );
}

function TermsDE({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
      <p className="text-muted mb-8">{lastUpdated}</p>

      <div className="legal-content">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung
          der mobilen Anwendung &quot;Docbase&quot; (nachfolgend &quot;App&quot;),
          die von Gazihan Isildak (nachfolgend &quot;Anbieter&quot;)
          bereitgestellt wird.
        </p>

        <h2>2. Vertragsgegenstand</h2>
        <p>
          Die App ermöglicht Nutzern das Digitalisieren, Organisieren und
          Speichern von Dokumenten. Die App bietet:
        </p>
        <ul>
          <li>Dokumentenscan mit automatischer Kantenerkennung</li>
          <li>On-Device OCR (Texterkennung)</li>
          <li>Kategorisierung und Tagging</li>
          <li>Suche in Dokumenten</li>
          <li>Cloud-Backup über Google Drive (Premium)</li>
        </ul>

        <h2>3. Registrierung und Nutzerkonto</h2>
        <h3>3.1 Voraussetzungen</h3>
        <p>
          Für die Nutzung der App ist eine Registrierung erforderlich. Die
          Registrierung ist nur Personen gestattet, die das 16. Lebensjahr
          vollendet haben.
        </p>

        <h3>3.2 Kontosicherheit</h3>
        <p>
          Der Nutzer ist für die Sicherheit seiner Zugangsdaten selbst
          verantwortlich. Bei Verdacht auf Missbrauch ist der Anbieter
          unverzüglich zu informieren.
        </p>

        <h2>4. Leistungsumfang</h2>
        <h3>4.1 Kostenlose Version</h3>
        <p>Die kostenlose Version umfasst:</p>
        <ul>
          <li>Speicherung von bis zu 10 Dokumenten</li>
          <li>On-Device OCR</li>
          <li>Basis-Kategorisierung</li>
          <li>Lokale Speicherung</li>
        </ul>

        <h3>4.2 Premium-Version</h3>
        <p>Die Premium-Version bietet zusätzlich:</p>
        <ul>
          <li>Unbegrenzte Dokumentenanzahl</li>
          <li>Google Drive Backup</li>
          <li>KI-gestützte Suchfunktion</li>
          <li>Prioritäts-Support</li>
          <li>Alle zukünftigen Premium-Features</li>
        </ul>

        <h2>5. Nutzungspflichten</h2>
        <p>Der Nutzer verpflichtet sich:</p>
        <ul>
          <li>Die App nur für legale Zwecke zu nutzen</li>
          <li>Keine rechtswidrigen Inhalte zu speichern</li>
          <li>Die Rechte Dritter zu respektieren</li>
          <li>Keine Manipulation der App vorzunehmen</li>
        </ul>

        <h2>6. Haftung</h2>
        <h3>6.1 Haftungsbeschränkung</h3>
        <p>
          Der Anbieter haftet unbeschränkt bei Vorsatz oder grober
          Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit.
        </p>

        <h3>6.2 Datenverlust</h3>
        <p>
          Der Anbieter haftet nicht für Datenverluste, die durch den Nutzer oder
          Dritte verursacht wurden. Dem Nutzer wird empfohlen, regelmäßige
          Backups seiner Daten zu erstellen.
        </p>

        <h2>7. Verfügbarkeit</h2>
        <p>
          Der Anbieter bemüht sich um eine hohe Verfügbarkeit der App, kann
          jedoch keine ununterbrochene Verfügbarkeit garantieren.
          Wartungsarbeiten und technische Störungen können zu temporären
          Einschränkungen führen.
        </p>

        <h2>8. Änderungen der AGB</h2>
        <p>
          Der Anbieter behält sich vor, diese AGB zu ändern. Wesentliche
          Änderungen werden dem Nutzer rechtzeitig mitgeteilt. Bei
          Weiterbenutzung nach Inkrafttreten der Änderungen gelten diese als
          akzeptiert.
        </p>

        <h2>9. Kündigung</h2>
        <h3>9.1 Kündigung durch den Nutzer</h3>
        <p>
          Der Nutzer kann sein Konto jederzeit in den App-Einstellungen löschen.
          Abonnements müssen separat über den App Store gekündigt werden.
        </p>

        <h3>9.2 Kündigung durch den Anbieter</h3>
        <p>
          Der Anbieter kann das Nutzungsverhältnis bei schwerwiegenden Verstößen
          gegen diese AGB fristlos kündigen.
        </p>

        <h2>10. Schlussbestimmungen</h2>
        <h3>10.1 Anwendbares Recht</h3>
        <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>

        <h3>10.2 Gerichtsstand</h3>
        <p>
          Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich zulässig,
          der Sitz des Anbieters.
        </p>

        <h3>10.3 Salvatorische Klausel</h3>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>

        <h2>11. Kontakt</h2>
        <p>Bei Fragen zu diesen AGB wenden Sie sich an:</p>
        <p>E-Mail: info@gzhn.online</p>
      </div>
    </div>
  );
}
